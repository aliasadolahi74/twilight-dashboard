import React from "react";
import { ChevronRightIcon, HomeIcon, LogoIcon, DollarIcon, StarIcon, PuzzleIcon, PersonIcon } from "@/src/assets/svgs";
import SearchInput from "@/src/features/common/Inputs/SearchInput";
import DashboardMenu from "../DashboardMenu";

const DashboardSidebar: React.FC = () => {
  const menuItems: IDashboardItemType[] = [
    {
      slug: "dashboard",
      title: "Dashboard",
      icon: <HomeIcon />,
      submenu: [
        {
          slug: "dashboard/all-pages",
          title: "All pages",
        },
        {
          slug: "dashboard/reports",
          title: "Reports",
        },
        {
          slug: "dashboard/task",
          title: "Task",
        },
        {
          slug: "dashboard/products",
          title: "Products",
        },
      ],
    },
    { title: "Features", icon: <StarIcon />, slug: "features" },
    { title: "Users", icon: <PersonIcon />, slug: "users" },
    { title: "Pricing", icon: <DollarIcon />, slug: "pricing" },
    { title: "Integrations", icon: <PuzzleIcon />, slug: "integrations" },
  ];

  return (
    <aside className='w-[300px] h-full max-h-screen bg-background shadow-3 px-[28px] py-10'>
      <header className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <LogoIcon width='27px' height='27px' />
          <h1 className='text-[#fefefe] text-xl font-semibold leading-snug'>Dashdark X</h1>
        </div>
        <div className='flex flex-row'>
          <ChevronRightIcon className='w-3 h-[13px] p-1 box-content rotate-180 cursor-pointer text-[#AEB9E1]' />
          <ChevronRightIcon className='w-3 h-[13px] p-1 box-content cursor-pointer text-[#AEB9E1]' />
        </div>
      </header>
      <section className='mt-10'>
        <SearchInput />
      </section>
      <section className='mt-8 w-full'>
        <DashboardMenu items={menuItems} />
      </section>
    </aside>
  );
};

export default DashboardSidebar;
