import { LayoutDashboard, CheckSquare, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

/**
 * Sidebar Component
 * Displays the main navigation.
 */
function Sidebar({ isOpen, closeSidebar }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    closeSidebar();
    navigate("/", { replace: true });
  };

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: CheckSquare,
      label: "My Tasks",
      path: "/my-tasks",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/profile",
    },
  ];

  return (
    <>
      {/* Mobile Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-30"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
        fixed
    top-0
    left-0
    h-screen
    w-72
    bg-slate-950 text-slate-300
    border-r border-slate-800
    z-40
    transform
    transition-transform duration-300
    flex flex-col

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:translate-x-0
        `}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-tight text-white">Task<span className="text-indigo-400">Flow</span></h1>

          <p className="text-slate-400 text-sm mt-1">
            Productivity Made Simple
          </p>
        </div>

        <nav className="px-4 mt-8 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                navigate(item.path);
                closeSidebar();
              }}
              className="
                w-full
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                text-slate-300
                hover:bg-white/10
                hover:text-white
                transition-all
              "
            >
              <item.icon size={22} />

              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              text-rose-300
              hover:bg-rose-400/10
            "
          >
            <LogOut size={22} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
