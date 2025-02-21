"use client";
import React from "react";
import { YAxis, XAxis, ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  { date: "Jan 1", value: 10 },
  { date: "Jan 8", value: 80 },
  { date: "Jan 16", value: 150 },
  { date: "Jan 24", value: 300 },
  { date: "Jan 31", value: 150 },
  { date: "Feb 1", value: 257 },
];

const ReportCompletedTaskChart: React.FC = () => {
  const formatYAxisTicks = (value: string) => {
    const mValue = Number(value);
    if (mValue > 1000) {
      return `${Number((mValue / 1000).toFixed(1))}K`;
    }
    return value;
  };

  return (
    <ResponsiveContainer width={"100%"} height={130}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id='colorTasks' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#22d3ee' stopOpacity={0.2} />
            <stop offset='100%' stopColor='#22d3ee' stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis
          domain={[0, 500]}
          ticks={[0, 100, 250, 500]}
          tickFormatter={formatYAxisTicks}
          tick={{ fill: "#AEB9E1", fontSize: 10, fontWeight: 500 }}
          tickLine={false}
          axisLine={false}
        />
        <XAxis
          tick={{ fill: "#AEB9E1", fontSize: 10, fontWeight: 500 }}
          tickLine={false}
          axisLine={false}
          dataKey='date'
        />
        <Area type='linear' dataKey='value' stroke='#22d3ee' strokeWidth={2} fill='url(#colorTasks)' dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ReportCompletedTaskChart;
