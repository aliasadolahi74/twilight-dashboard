import React from "react";
import { cn } from "shadcn/lib/utils";
import { DecreaseIcon, IncreaseIcon } from "@/src/assets/svgs";

type IChangePercentageBadgeProps = {
  value: number;
};

const ChangePercentageBadge: React.FC<IChangePercentageBadgeProps> = ({ value }) => {
  return (
    <div
      className={cn(
        "flex flex-row text-10 font-medium justify-between w-[53px] h-[18px] items-center border-[0.6px] rounded-[2px] px-1",
        { "text-[#14CA74] border-[#05C16833] bg-[#05C16833]": value >= 0 },
        { "text-[#FF5A65] border-[#FF5A6533] bg-[#FF5A6533]": value < 0 }
      )}
    >
      <span className='text-10 font-medium'>{Math.abs(value)}%</span>
      {value > 0 ? <IncreaseIcon className='w-2' /> : <DecreaseIcon className='w-2' />}
    </div>
  );
};

export default ChangePercentageBadge;
