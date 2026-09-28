// import { useState ,useEffect} from "react";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// /**
//  * Dashboard Layout
//  * Controls sidebar state.
//  */
// function DashboardLayout({ children, openTaskModal }) {
//   const [sidebarOpen, setSidebarOpen] = useState(() => {
//     return JSON.parse(localStorage.getItem("sidebarOpen")) ?? true;
//   });

//   useEffect(() => {
//     localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
//   }, [sidebarOpen]);

//   return (
//     <div className="min-h-screen bg-slate-50 flex">
//       <Sidebar
//         isOpen={sidebarOpen}
//         closeSidebar={() => setSidebarOpen(false)}
//       />

//       <div className="flex-1 lg:ml-0">
//         <Header
//           openSidebar={() => setSidebarOpen(true)}
//           openTaskModal={openTaskModal}
//         />

//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;


import { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

/**
 * Dashboard Layout
 * Keeps the sidebar fixed while only the main content scrolls.
 */
function DashboardLayout({ children, openTaskModal }) {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("sidebarOpen")) ?? true;
  });

  useEffect(() => {
    localStorage.setItem(
      "sidebarOpen",
      JSON.stringify(sidebarOpen)
    );
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      {/* Fixed Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen">
        <Header
          openSidebar={() => setSidebarOpen(true)}
          openTaskModal={openTaskModal}
        />

        <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
