import React from "react";
import { Button } from "shadcn/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Card from "@/src/features/common/Card";
import dynamic from "next/dynamic";
import ChartLegend from "@/src/features/Reports/components/ChartLegend";
const RadialChart = dynamic(() => import("@/src/features/Reports/components/WebsiteVisitors/RadialChart"), {
  ssr: false,
});

const WebsiteVisitors = () => {
  const legendClassNames = {
    container: "gap-2",
    label: "text-[14px] text-neutral-400 font-normal",
  };
  return (
    <Card className='py-10 flex flex-col px-8 grow-[2] basis-0 rounded-[12px] shrink-0'>
      <div className='flex flex-row items-center justify-between'>
        <h3 className='text-16 font-medium text-neutral-100 leading-[18px]'>Website Visitors</h3>
        <Button className='h-[30px] px-2 text-12 font-medium bg-neutral-700 hover:bg-neutral-800 outline-none focus-within:shadow-none'>
          <span>Export</span>
          <ArrowDownIcon className='size-[10px]' />
        </Button>
      </div>
      <RadialChart />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-row justify-between'>
          <ChartLegend classNames={legendClassNames} label='Organic' color='#CB3CFF' />
          <span className='text-neutral-100 font-medium leading-[14px] text-14'>80%</span>
        </div>
        <div className='flex flex-row justify-between'>
          <ChartLegend classNames={legendClassNames} label='Social' color='#0E43FB' />
          <span className='text-neutral-100 font-medium leading-[14px] text-14'>44%</span>
        </div>
        <div className='flex flex-row justify-between'>
          <ChartLegend classNames={legendClassNames} label='Direct' color='#00C2FF' />
          <span className='text-neutral-100 font-medium leading-[14px] text-14'>20%</span>
        </div>
      </div>
    </Card>
  );
};

export default WebsiteVisitors;
