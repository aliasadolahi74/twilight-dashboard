import React from "react";
import { Input } from "shadcn/components/ui/input";
import { MagnifierIcon } from "@/src/assets/svgs";

const SearchInput = () => {
  return (
    <div className='flex flex-row items-center relative'>
      <Input
        className='w-60 h-10 bg-[#0a1638] rounded border border-[#343a4e] placeholder:text-[#AEB9E1] pl-[38px]'
        placeholder='Search for...'
      />
      <MagnifierIcon className='size-3.5 text-[#AEB9E1] absolute left-3.5' />
    </div>
  );
};

export default SearchInput;
