// import { Menu, Search, Bell } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";

// /**
//  * Dashboard Header
//  */
// function Header({ openSidebar, openTaskModal }) {
//   const { user } = useAuth();

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         bg-white/90
//         backdrop-blur-md
//         border-b border-slate-200
//         z-20
//       "
//     >
//       <div
//         className="
//           px-6
//           py-4
//           flex
//           items-center
//           justify-between
//           gap-4
//         "
//       >
//         {/* Left Side */}
//         <div className="flex items-center gap-4">
//           <button onClick={openSidebar} className="lg:hidden">
//             <Menu size={24} />
//           </button>

//           <div>
//             <h2 className="text-2xl font-bold">Welcome back,</h2>
//               <p className="text-slate-500">{user?.name || "User"}</p>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-3">
//           <div
//             className="
//               hidden
//               md:flex
//               items-center
//               bg-slate-100
//               px-3
//               py-2
//               rounded-xl
//             "
//           >
//             <Search size={18} className="text-slate-500" />

//             <input
//               placeholder="Search tasks..."
//               className="
//                 bg-transparent
//                 ml-2
//                 outline-none
//               "
//             />
//           </div>
//           <button className="hidden md:block" onClick={openTaskModal}>
//             + New Task
//           </button>
//           <button
//             className="
//               p-2
//               rounded-xl
//               hover:bg-slate-100
//             "
//           >
//             <Bell size={22} />
//           </button>

//           <div
//             className="
//               w-10
//               h-10
//               rounded-full
//               bg-indigo-600
//               text-white
//               flex
//               items-center
//               justify-center
//               font-bold
//             "
//           >
//             {user?.name?.charAt(0) || "U"}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState } from "react";
import { Menu, Bell, Plus } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

/**
 * Dashboard Header
 */
function Header({ openSidebar, openTaskModal }) {
  const { user } = useAuth();

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        bg-white/75
        backdrop-blur-md
        border-b border-slate-200
        z-20
      "
    >
      <div
        className="
          px-4 sm:px-6 lg:px-8
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
            <p className="text-sm text-slate-500">Here’s your workspace</p>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Good to see you, {user?.name?.split(" ")[0] || "there"}</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={openTaskModal}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 sm:px-4"
          >
            <Plus size={18} /> <span className="hidden sm:inline">New task</span>
          </button>

          <button
            className="
              hidden sm:block p-2.5 rounded-xl text-slate-500 hover:bg-slate-100
            "
          >
            <Bell size={22} />
          </button>

          {/* Profile Avatar */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
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
                hover:scale-105
                transition
              "
            >
              {user?.name?.charAt(0) || "U"}
            </button>

            {isProfileOpen && <ProfileDropdown />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
