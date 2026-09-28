import { useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import PasswordStrengthMeter from "../../components/profile/PasswordStrengthMeter";

import { changePassword } from "../../services/profileService";

/**
 * Change Password Page
 */
function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await changePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      toast.success("Password changed successfully.");

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to change password."
      );
    }
  };

  return (
    <DashboardLayout>
      <Card className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold">
          Change Password
        </h1>

        <p className="text-slate-500 mt-2">
          Keep your account secure by updating your password regularly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-6"
        >
          <Input
            label="Current Password"
            name="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={handleChange}
          />

          <Input
            label="New Password"
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
          />

          <Input
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <PasswordStrengthMeter
            password={formData.newPassword}
          />

          <Button type="submit" className="w-full">
            Update Password
          </Button>
        </form>
      </Card>
    </DashboardLayout>
  );
}

export default ChangePasswordPage;
