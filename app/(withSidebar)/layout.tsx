import React from "react";
import DashboardSidebar from "@/src/features/Dashboard/DashboardSidebar";

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='min-h-screen h-full w-full flex'>
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default SidebarLayout;
