import { DollarIcon, HomeIcon, ProductIcon, SuitcaseIcon } from "@/src/assets/svgs";
import SmallReportCard from "@/src/features/Reports/components/SmallReportCard";
import React from "react";
import WebsiteVisitors from "@/src/features/Reports/components/WebsiteVisitors";
import RevenueByCustomer from "@/src/features/Reports/components/RevenueByCustomer";
import CompletedTaskOverTime from "@/src/features/Reports/components/CompletedTaskOverTime";
import Products from "@/src/features/Reports/components/Products";
import ReportsPageHeader from "@/src/features/Reports/components/ReportsPageHeader";

export default function Home() {
  return (
    <div className='flex w-full h-screen flex-col overflow-y-scroll items-center justify-items-center min-h-screen p-8 pb-20 gap-8 '>
      <ReportsPageHeader />
      <div className='grid w-full grid-cols-4 gap-8'>
        <SmallReportCard icon={<HomeIcon />} title='Save Products' value={31_200} changePercentage={21.2} />
        <SmallReportCard icon={<ProductIcon />} title='Stock Products' value={31_200} changePercentage={11.5} />
        <SmallReportCard icon={<SuitcaseIcon />} title='Sale Products' value={24} changePercentage={-2.5} />
        <SmallReportCard icon={<DollarIcon />} title='Average Revenue' value={23_100} changePercentage={-90.2} />
      </div>
      <div className='flex flex-row w-full gap-8'>
        <WebsiteVisitors />
        <RevenueByCustomer />
      </div>
      <div className='flex flex-row w-full gap-8'>
        <Products />
        <CompletedTaskOverTime />
      </div>
    </div>
  );
}
