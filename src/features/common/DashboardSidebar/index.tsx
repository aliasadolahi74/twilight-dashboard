import React from 'react';
import {LogoIcon} from "@/src/assets/svgs";

const DashboardSidebar: React.FC = () => {
    return (
        <aside className="w-[300px] h-full bg-background shadow-3 px-[28px] py-10">
            <header>
                <LogoIcon width="27px" height="27px" />
            </header>
        </aside>
    );
};

export default DashboardSidebar;