"use client";
import React from "react";
import { BarChart, Bar, YAxis, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value1: 15000, value2: 10000, value3: 35000 },
  { name: "Feb", value1: 30000, value2: 15000, value3: 40000 },
  { name: "Mar", value1: 35000, value2: 20000, value3: 35000 },
  { name: "Apr", value1: 30000, value2: 15000, value3: 25000 },
  { name: "May", value1: 12000, value2: 8000, value3: 10000 },
  { name: "Jun", value1: 25000, value2: 20000, value3: 25000 },
  { name: "Jul", value1: 10000, value2: 5000, value3: 20000 },
  { name: "Aug", value1: 35000, value2: 25000, value3: 30000 },
  { name: "Sep", value1: 15000, value2: 10000, value3: 25000 },
  { name: "Oct", value1: 5000, value2: 15000, value3: 25000 },
  { name: "Nov", value1: 20000, value2: 10000, value3: 15000 },
  { name: "Dec", value1: 25000, value2: 15000, value3: 30000 },
];

const ReportBarChart: React.FC = () => {
  const formatYAxisTicks = (value: string) => {
    const mValue = Number(value);
    if (mValue > 1000) {
      return `${Number((mValue / 1000).toFixed(1))}K`;
    }
    return value;
  };

  return (
    <ResponsiveContainer width={"100%"} height={340}>
      <BarChart barSize={7} data={data}>
        <YAxis
          tickFormatter={formatYAxisTicks}
          tick={{ fill: "#AEB9E1", fontSize: 10, fontWeight: 500 }}
          tickLine={false}
          axisLine={false}
        />
        <XAxis
          tick={{ fill: "#AEB9E1", fontSize: 10, fontWeight: 500 }}
          tickLine={false}
          axisLine={false}
          dataKey='name'
        />
        <Bar dataKey='value1' stackId='a' fill='#CB3CFF' />
        <Bar dataKey='value2' stackId='a' fill='#0E43FB' />
        <Bar dataKey='value3' stackId='a' fill='#00C2FF' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReportBarChart;
