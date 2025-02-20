"use client";
import React, { createContext, SetStateAction, useState } from "react";
import MenuItem from "@/src/features/Dashboard/DashboardMenu/MenuItem";
import uniqueId from "lodash/uniqueId";

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
          if (menuItem.slug === "__SEPARATOR__") {
            return (
              <div
                key={uniqueId(menuItem.slug)}
                className='w-full border-b border-b-neutral-100 opacity-20 my-[21px]'
              />
            );
          }
          return (
            <div key={menuItem.slug} className='w-full px-[28px]'>
              <MenuItem properties={menuItem} />
            </div>
          );
        })}
      </div>
    </DashboardMenuContext.Provider>
  );
};

export default DashboardMenu;
