"use client";
import React from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const RadialChart = () => {
  const data = [
    {
      name: "Direct",
      value: 30,
      fill: "#22d3ee",
    },
    {
      name: "Social",
      value: 67,
      fill: "#3b82f6",
    },
    {
      name: "Organic",
      value: 120,
      fill: "#CB3CFF",
    },
    {
      name: "unknown",
      value: 150,
      fill: "transparent",
    },
  ];

  return (
    <div className='relative flex flex-col mt-6 items-center justify-center'>
      <ResponsiveContainer width={"100%"} height={200}>
        <RadialBarChart cx='50%' cy='50%' innerRadius='100%' outerRadius='70%' barSize={10} data={data}>
          <RadialBar background={false} dataKey='value' />
        </RadialBarChart>
      </ResponsiveContainer>
      <span className='font-semibold absolute text-[28px]'>150k</span>
    </div>
  );
};

export default RadialChart;
