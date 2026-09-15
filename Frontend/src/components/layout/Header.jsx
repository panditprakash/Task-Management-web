import { Menu, Search, Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

/**
 * Dashboard Header
 */
function Header({ openSidebar, openTaskModal }) {
  const { user } = useAuth();

  return (
    <header
      className="
        sticky
        top-0
        bg-white/90
        backdrop-blur-md
        border-b border-slate-200
        z-20
      "
    >
      <div
        className="
          px-6
          py-4
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button onClick={openSidebar} className="lg:hidden">
            <Menu size={24} />
          </button>

          <div>
            <h2 className="text-2xl font-bold">Welcome back,</h2>
              <p className="text-slate-500">{user?.name || "User"}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div
            className="
              hidden
              md:flex
              items-center
              bg-slate-100
              px-3
              py-2
              rounded-xl
            "
          >
            <Search size={18} className="text-slate-500" />

            <input
              placeholder="Search tasks..."
              className="
                bg-transparent
                ml-2
                outline-none
              "
            />
          </div>
          <button className="hidden md:block" onClick={openTaskModal}>
            + New Task
          </button>
          <button
            className="
              p-2
              rounded-xl
              hover:bg-slate-100
            "
          >
            <Bell size={22} />
          </button>

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-indigo-600
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            {user?.name?.charAt(0) || "U"}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
