import React, { FC, ReactNode } from "react";
interface BoxBackgroundProps {
  children: ReactNode;
  className?: string;
}
const BoxBackground: FC<BoxBackgroundProps> = ({ children, className }) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.16)",
      }}
      className={`bg-[#1B1C1E] border-[1px] border-[#25272A] rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default BoxBackground;
