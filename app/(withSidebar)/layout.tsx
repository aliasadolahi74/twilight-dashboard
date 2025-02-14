import React from "react";
import DashboardSidebar from "@/src/features/Dashboard/DashboardSidebar";

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen w-full flex'>
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default SidebarLayout;
