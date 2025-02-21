import React from "react";
import Card from "@/src/features/common/Card";
import { ThreeHorizontalDotsIcon } from "@/src/assets/svgs";
import NumberWithChangeBadge from "@/src/features/Reports/components/NumberWithChangeBadge";

type ISmallReportCardProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
  changePercentage: number;
};

const SmallReportCard: React.FC<ISmallReportCardProps> = ({ title, icon, changePercentage, value }) => {
  return (
    <Card className='p-5 flex flex-col'>
      <div className='flex flex-row justify-between mb-4'>
        <div className='flex flex-row items-center gap-2.5 [&>svg]:size-[14px] [&>svg]:text-primary'>
          {icon}
          <span className='text-12 font-medium leading-[14px] text-neutral-400'>{title}</span>
        </div>
        <button>
          <ThreeHorizontalDotsIcon className='w-4 text-neutral-200' />
        </button>
      </div>
      <NumberWithChangeBadge changePercentage={changePercentage} value={value} />
    </Card>
  );
};

export default SmallReportCard;
