"use client";
import Button from "@/design-systems/Atoms/Button";
import Typography from "@/design-systems/Atoms/Typography";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState } from "react";
import { useAccount } from "wagmi";
interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<Boolean>(false);
  return (
    <div className="h-[94vh] flex flex-row">
      <div className="bg-[#111113] h-full w-[18%] py-6 px-8 border-r-[1px]  border-[#25272A]">
        <div className="flex flex-col items-start justify-start gap-7 ">
          <Typography className="font-inter text-sm font-medium text-[#40E0D0]">
            Overview
          </Typography>
          <Typography className="font-inter text-sm font-medium text-white">
            Perpetuals
          </Typography>
          <Typography className="font-inter text-sm font-medium text-white">
            Pools
          </Typography>
          <Typography className="font-inter text-sm font-medium text-white">
            Points
          </Typography>
          <Typography className="font-inter text-sm font-medium text-white">
            Rewards
          </Typography>
          <Typography className="font-inter text-sm font-medium text-white">
            History
          </Typography>
        </div>
      </div>
      <div className="page-wrap w-[80%] mx-20 my-12 overflow-y-scroll pb-20">
        {children}
      </div>
    </div>
  );
};
export default Sidebar;
