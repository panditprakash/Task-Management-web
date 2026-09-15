import { User, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

/**
 * User Profile Dropdown
 */
function ProfileDropdown() {
  const { user, logout } = useAuth();

  return (
    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-slate-200 p-2">
      <div className="px-3 py-2 border-b">
        <p className="font-semibold">
          {user?.name}
        </p>

        <p className="text-sm text-slate-500">
          {user?.email}
        </p>
      </div>

      <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-slate-100">
        <User size={18} />
        Profile
      </button>

      <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-slate-100">
        <Settings size={18} />
        Settings
      </button>

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