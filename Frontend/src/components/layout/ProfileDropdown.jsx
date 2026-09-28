import { Link } from "react-router-dom";
import { User, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function ProfileDropdown() {
  const { user, logout } = useAuth();

  return (
    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-slate-200 p-2">
      <div className="px-3 py-2 border-b">
        <p className="font-semibold">{user?.name}</p>
        <p className="text-sm text-slate-500">{user?.email}</p>
      </div>

      <Link
        to="/profile"
        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-slate-100"
      >
        <User size={18} />
        Profile
      </Link>

      <Link
        to="/change-password"
        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-slate-100"
      >
        <Settings size={18} />
        Change Password
      </Link>

      <button
        onClick={logout}
        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-500 hover:bg-red-50"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}

export default ProfileDropdown;
