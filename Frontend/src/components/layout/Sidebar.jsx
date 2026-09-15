import { LayoutDashboard, CheckSquare, Settings, LogOut } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

/**
 * Sidebar Component
 * Displays the main navigation.
 */
function Sidebar({ isOpen, closeSidebar }) {
  const { logout } = useAuth();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      icon: CheckSquare,
      label: "My Tasks",
    },
    {
      icon: Settings,
      label: "Settings",
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
    bg-white
    border-r border-slate-200
    shadow-lg
    z-40
    transform
    transition-transform duration-300
    flex flex-col

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:translate-x-0
        `}
      >
        <div className="p-6">
          <h1 className="text-3xl font-bold text-indigo-600">TaskFlow</h1>

          <p className="text-slate-500 text-sm mt-1">
            Productivity Made Simple
          </p>
        </div>

        <nav className="px-4 mt-8 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="
                w-full
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                text-slate-700
                hover:bg-indigo-50
                hover:text-indigo-600
                transition-all
              "
            >
              <item.icon size={22} />

              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-slate-200">
          <button
            onClick={logout}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              text-red-500
              hover:bg-red-50
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
