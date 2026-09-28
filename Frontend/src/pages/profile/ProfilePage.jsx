import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import {
  getProfile,
  updateProfile,
} from "../../services/profileService";

import toast from "react-hot-toast";

/**
 * Profile Page
 */
function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.data.user);
      } catch {
        toast.error("Failed to load profile.");
      }
    };
    loadProfile();
  }, []);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateProfile({
        name: user.name,
        email: user.email,
      });

      setUser(response.data.user);

      toast.success("Profile updated.");
    } catch {
      toast.error("Update failed.");
    }
  };

  return (
    <DashboardLayout>
      <Card className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-6"
        >
          <Input
            label="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <Button type="submit">
            Save Changes
          </Button>
        </form>
      </Card>
    </DashboardLayout>
  );
}

export default ProfilePage;
