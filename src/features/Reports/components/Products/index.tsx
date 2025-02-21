import React from "react";
import Card from "@/src/features/common/Card";
import iphone from "@/src/assets/images/iphone.png";
import appleWatch from "@/src/assets/images/apple-watch.png";
import Product from "@/src/features/Reports/components/Products/Product";

const Products = () => {
  return (
    <Card className='py-10 flex flex-col px-8 grow-[2] basis-0 rounded-[12px] shrink-0'>
      <h3 className='text-16 font-medium text-neutral-100 leading-[18px]'>Products</h3>
      <div className='grid gap-y-[30px] items-center grid-cols-[auto_1fr] [&_*:nth-child(2n)]:text-right mt-8'>
        <span className='text-10 text-neutral-100 font-medium'>Products</span>
        <span className='text-10 text-neutral-100 font-medium'>Price</span>
        <Product numberInStock={524} image={iphone} name='iPhone 16 Pro Max' price={1099} />
        <Product numberInStock={524} image={appleWatch} name='Apple Watch S8' price={799} />
      </div>
    </Card>
  );
};

export default Products;
