import React from "react";
import { cn } from "shadcn/lib/utils";

type IChartLegendProps = {
  label: string;
  color: string;
  classNames?: Partial<{
    container: string;
    bullet: string;
    label: string;
  }>;
};

const ChartLegend: React.FC<IChartLegendProps> = ({ color, label, classNames }) => {
  return (
    <div className={cn("gap-1 flex flex-row items-center", classNames?.container)}>
      <div className={cn("size-[7px] rounded-full shrink-0", classNames?.bullet)} style={{ backgroundColor: color }} />
      <span className={cn("text-neutral-400 text-10 font-medium", classNames?.label)}>{label}</span>
    </div>
  );
};

export default ChartLegend;
