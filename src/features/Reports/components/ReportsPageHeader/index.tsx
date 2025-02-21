import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "shadcn/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const ReportsPageHeader = () => {
  return (
    <header className='flex w-full flex-row justify-between items-center'>
      <h1 className='text-[20px] leading-[22px] font-semibold'>Analytics</h1>
      <DropdownMenu>
        <DropdownMenuTrigger className='relative w-[92px] h-[30px]  bg-primary text-12 leading-[14px] border-none outline-none rounded-[4px] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(128deg,#CB3CFF_19.86%,#7F25FB_68.34%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
          <div className='w-full z-10 top-0 absolute h-full flex flex-row items-center justify-center gap-[6px]'>
            <span>May 2023</span>
            <ChevronDown className='size-[12px]' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>May 2023</DropdownMenuItem>
          <DropdownMenuItem>June 2023</DropdownMenuItem>
          <DropdownMenuItem>July 2023</DropdownMenuItem>
          <DropdownMenuItem>August 2023</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default ReportsPageHeader;
