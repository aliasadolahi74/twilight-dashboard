import React, { HTMLAttributes } from "react";
import { cn } from "shadcn/lib/utils";

type ICardProps = {
  className: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card: React.FC<ICardProps> = ({ className, children, ...otherProps }) => {
  return (
    <div className={cn("bg-secondary-1 rounded-lg", className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
