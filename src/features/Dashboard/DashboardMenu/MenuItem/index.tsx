import React, { useContext } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "shadcn/lib/utils";
import { DashboardMenuContext } from "@/src/features/Dashboard/DashboardMenu";

type IMenuItemProps = {
  properties: IDashboardItemType;
};

const MenuItem: React.FC<IMenuItemProps> = ({ properties }) => {
  const { activeItem, setActiveItem } = useContext(DashboardMenuContext);
  const { slug, title, submenu, icon } = properties;
  const isActive = activeItem?.split("/").includes(slug);

  const handleMenuItemClick = () => {
    if (activeItem.split("/").length === 1 && activeItem === slug) {
      setActiveItem("");
    } else {
      setActiveItem(slug);
    }
  };

  return (
    <button onClick={handleMenuItemClick} className='flex flex-row items-center justify-between h-[42px]'>
      <div
        className={cn("flex flex-row items-center gap-1.5 text-neutral-400", {
          "!text-primary": isActive,
        })}
      >
        <span>{icon}</span>
        <span className='text-14'>{title}</span>
      </div>
      {submenu && submenu.length > 0 && (
        <ChevronRight className={cn("transition-all duration-300 size-[12px]", { "rotate-90": isActive })} />
      )}
    </button>
  );
};

export default MenuItem;
