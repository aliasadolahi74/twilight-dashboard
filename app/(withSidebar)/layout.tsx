import React from 'react';
import DashboardSidebar from "@/src/features/common/DashboardSidebar";

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="h-screen w-full">
            <DashboardSidebar />
            {children}


            sdfsafd
        </div>
    );
};

export default SidebarLayout;