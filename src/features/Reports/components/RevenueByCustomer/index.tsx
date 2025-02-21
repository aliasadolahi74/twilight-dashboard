import React from "react";
import NumberWithChangeBadge from "@/src/features/Reports/components/NumberWithChangeBadge";
import ChartLegend from "@/src/features/Reports/components/ChartLegend";
import { Button } from "shadcn/components/ui/button";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import Card from "@/src/features/common/Card";
import dynamic from "next/dynamic";
const ReportBarChart = dynamic(() => import("@/src/features/Reports/components/RevenueByCustomer/ReportBarChart"), {
  ssr: false,
});

const RevenueByCustomer = () => {
  return (
    <Card className='p-7 grow-[5] basis-0 rounded-[12px] shrink-0'>
      <h3 className='text-14 font-medium leading-[14px] text-neutral-400'>Revenue by customer type</h3>
      <div className='mt-2.5 flex flex-row justify-between'>
        <NumberWithChangeBadge changePercentage={14.8} value={240_800} />
        <div className='flex flex-row gap-4'>
          <ChartLegend label='Current clients' color='#CB3CFF' />
          <ChartLegend label='Current clients' color='#0E43FB' />
          <ChartLegend label='Current clients' color='#00C2FF' />
        </div>
        <Button className='h-[30px] text-10 !text-neutral-400 px-2 font-medium bg-neutral-700 hover:bg-neutral-800 outline-none focus-within:shadow-none'>
          <CalendarIcon className='size-[10px]' />
          <span>Jan 2024 - Dec 2024</span>
          <ChevronDownIcon className='size-[10px]' />
        </Button>
      </div>
      <div className='flex mt-7'>
        <ReportBarChart />
      </div>
    </Card>
  );
};

export default RevenueByCustomer;
