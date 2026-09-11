import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

/**
 * Dashboard Layout
 * Controls sidebar state.
 */
function DashboardLayout({ children, openTaskModal }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-0">
        <Header
          openSidebar={() => setSidebarOpen(true)}
          openTaskModal={openTaskModal}
        />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
