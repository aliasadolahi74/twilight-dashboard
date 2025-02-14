"use client";
import React, { createContext, SetStateAction, useState } from "react";
import MenuItem from "@/src/features/Dashboard/DashboardMenu/MenuItem";

type IDashboardItemProps = {
  items: IDashboardItemType[];
};
export const DashboardMenuContext = createContext<{
  activeItem: string;
  setActiveItem: React.Dispatch<SetStateAction<string>>;
}>({ activeItem: "", setActiveItem: () => null });

const DashboardMenu: React.FC<IDashboardItemProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <DashboardMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <div className='flex flex-col w-full gap-1'>
        {items?.map((menuItem) => {
          return <MenuItem properties={menuItem} key={menuItem.slug} />;
        })}
      </div>
    </DashboardMenuContext.Provider>
  );
};

export default DashboardMenu;
