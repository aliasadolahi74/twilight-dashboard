import React from "react";
import ChangePercentageBadge from "@/src/features/Reports/components/ChangePercentageBadge";

type INumberWithChangeBadgeProps = {
  changePercentage: number;
  value: number;
};

const NumberWithChangeBadge: React.FC<INumberWithChangeBadgeProps> = ({ changePercentage, value }) => {
  const getValueStr = () => {
    if (value > 1000) {
      const temp = (value / 1000).toFixed(1);
      return `${temp}K`;
    }
    return value;
  };

  return (
    <div className='flex flex-row gap-1.5 items-center'>
      <span className='text-[24px] font-semibold'>{getValueStr()}</span>
      <ChangePercentageBadge value={changePercentage} />
    </div>
  );
};

export default NumberWithChangeBadge;
