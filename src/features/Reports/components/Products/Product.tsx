import React from "react";
import Image, { StaticImageData } from "next/image";

type IProductProps = {
  name: string;
  numberInStock: number;
  price: number;
  image: StaticImageData;
};

const Product: React.FC<IProductProps> = ({ price, numberInStock, name, image }) => {
  return (
    <>
      <div className='flex flex-row items-center gap-[15px]'>
        <Image src={image} alt='iphone' width={36} height={36} />
        <div className='flex flex-col items-start'>
          <span className='font-semibold text-12 leading-[14px] text-neutral-100'>{name}</span>
          <span className='text-neutral-400 text-10 font-medium'>{numberInStock} in stock</span>
        </div>
      </div>
      <span className='text-10 font-medium text-neutral-100'>$ {price.toLocaleString("en-US")}</span>
    </>
  );
};

export default Product;
