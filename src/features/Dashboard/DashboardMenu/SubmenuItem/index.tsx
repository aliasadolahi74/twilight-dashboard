import React, { useContext } from "react";
import { DashboardMenuContext } from "@/src/features/Dashboard/DashboardMenu";
import { cn } from "shadcn/lib/utils";

type ISubmenuItemProps = {
  properties: Omit<IDashboardItemType, "icon" | "submenu">;
};

const SubmenuItem: React.FC<ISubmenuItemProps> = ({ properties }) => {
  const { activeItem, setActiveItem } = useContext(DashboardMenuContext);
  const isActive = activeItem === properties.slug;
  const handleOnClick = () => {
    setActiveItem(properties.slug);
  };

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        'w-full !text-14 hover:bg-neutral-700 hover:text-white hover:before:opacity-100 h-[42px] before:opacity-0 before:duration-300 before:transition-all rounded relative before:content-[""] before:left-0 text-left flex items-center pl-3 before:absolute before:rounded-l-3xl before:h-full before:w-[3px] before:bg-primary',
        { "bg-neutral-700 text-white before:opacity-100": isActive },
        { "text-neutral-400": !isActive }
      )}
    >
      {properties.title}
    </button>
  );
};

export default SubmenuItem;
