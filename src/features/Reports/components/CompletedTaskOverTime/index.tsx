import React from "react";
import NumberWithChangeBadge from "@/src/features/Reports/components/NumberWithChangeBadge";
import { Button } from "shadcn/components/ui/button";
import { CalendarIcon, ChevronDownIcon, ClockIcon } from "lucide-react";
import Card from "@/src/features/common/Card";
import dynamic from "next/dynamic";
const ReportCompletedTaskChart = dynamic(
  () => import("@/src/features/Reports/components/CompletedTaskOverTime/ReportCompletedTaskChart"),
  {
    ssr: false,
  }
);

const CompletedTaskOverTime = () => {
  return (
    <Card className='p-7 grow-[5] basis-0 rounded-[12px] shrink-0'>
      <h3 className='text-14 flex flex-row items-center gap-2 font-medium leading-[14px] text-neutral-400'>
        <ClockIcon className='size-4' />
        <span>Completed tasks over time</span>
      </h3>
      <div className='mt-2.5 flex flex-row justify-between'>
        <NumberWithChangeBadge changePercentage={16.8} value={257} />
        <Button className='h-[30px] text-10 !text-neutral-400 px-2 font-medium bg-neutral-700 hover:bg-neutral-800 outline-none focus-within:shadow-none'>
          <CalendarIcon className='size-[10px]' />
          <span>Jan 2024</span>
          <ChevronDownIcon className='size-[10px]' />
        </Button>
      </div>
      <div className='flex mt-7'>
        <ReportCompletedTaskChart />
      </div>
    </Card>
  );
};

export default CompletedTaskOverTime;
