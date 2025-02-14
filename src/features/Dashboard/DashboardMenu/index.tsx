"use client";
import React, { createContext, SetStateAction, useState } from "react";
import uniqId from "lodash/uniqueId";
import SubmenuItem from "@/src/features/Dashboard/DashboardMenu/SubmenuItem";
import MenuItem from "@/src/features/Dashboard/DashboardMenu/MenuItem";
import { cn } from "shadcn/lib/utils";

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
    <div className='flex flex-col w-full gap-1'>
      {items?.map((menuItem) => {
        const isActive = activeItem?.split("/").includes(menuItem.slug);
        return (
          <div className='flex group flex-col w-full' key={uniqId()}>
            <DashboardMenuContext.Provider value={{ activeItem, setActiveItem }}>
              <MenuItem properties={menuItem} />
              {menuItem.submenu && menuItem.submenu.length > 0 && (
                <div
                  className={cn("grid grid-rows-[0fr] transition-all duration-300", { "grid-rows-[1fr]": isActive })}
                >
                  <div className='overflow-hidden'>
                    <div className='flex flex-col gap-1'>
                      {menuItem.submenu.map((submenuItem) => (
                        <SubmenuItem properties={submenuItem} key={uniqId()} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </DashboardMenuContext.Provider>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardMenu;
