"use client";
import Button from "@/design-systems/Atoms/Button";
import Typography from "@/design-systems/Atoms/Typography";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import { useAccount } from "wagmi";
import logo from "@/assets/image/icon/Brand-logo.png";
import Link from "next/link";
import { BellIcon, DollarGreen } from "@/design-systems/Atoms/Icons";
const Header: React.FC = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const handleConnect = () => {
    open();
  };

  return (
    <div className="bg-[#0d0d0d66]">
      <header className=" mx-auto px-7  border-b-[1px]  border-[#25272A] p-3">
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center">
            <div className="flex gap-1 items-center  mr-10 ">
              <Image src={logo} className="mr-3 w-5 h-5" alt="Flowbite Logo" />
              <span className="self-center text-[#009193] font-medium text-xl font-montserrat   whitespace-nowrap dark:text-white">
                FILAMENT
              </span>
            </div>
            <div className="flex gap-10 flex-row ">
              <Link href={"#"}>
                <Typography className="text-white font-inter text-sm leading-4">
                  Trade
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography className="text-white font-inter text-sm leading-4">
                  Pool
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography className="text-white font-inter text-sm leading-4">
                  Bond
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography className="text-white font-inter text-sm leading-4">
                  Referral
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography className="text-white font-inter text-sm leading-4">
                  Leaderboard
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography className="text-white font-inter text-sm leading-4">
                  Portfolio
                </Typography>
              </Link>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              style={{
                border:
                  "1px solid var(--colors-filament-turquoise-opacity-20, rgba(64, 224, 208, 0.20))",
                background: "linear-gradient(180deg, )",
                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="py-3 px-[16px] !text-[#009193] border-[1px] flex flex-row !gap-2 items-center justify-center rounded-[4px] border-[#0F413C]"
            >
              <DollarGreen />
              <Typography className="text-[#009193] font-inter text-sm leading-4">
                Earn 62% APR on USDT
              </Typography>
            </Button>
            <div className="h-[24px] mx-2 w-[1px] bg-[#25272A] " />
            <Button
              onClick={handleConnect}
              style={{
                border:
                  "1px solid var(--colors-white-8, rgba(255, 255, 255, 0.08))",
                background: "var(--colors-white-3, rgba(255, 255, 255, 0.03))",
                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20  )",
              }}
              className="py-3 px-[16px] !text-[#009193] border-[1px] flex flex-row !gap-2 items-center justify-center rounded-[4px] border-[#0F413C]"
            >
              {address ? (
                <div className="flex flex-row justify-end gap-3 items-centers">
                  <Typography className="text-[#6B7280] font-inter text-[12px] font-normal leading-4">
                    Linked Wallet
                  </Typography>
                  <Typography className="text-white font-inter text-sm leading-4">
                    {`${address.slice(0, 5)}.....${address.slice(
                      address.length - 5,
                      address.length
                    )}`}
                  </Typography>
                </div>
              ) : (
                <Typography className="text-[#6B7280] font-inter text-sm leading-4">
                  Connect Wallet
                </Typography>
              )}
            </Button>
            <Button
              style={{
                border:
                  "1px solid var(--colors-white-8, rgba(255, 255, 255, 0.08))",
                background: "var(--colors-white-3, rgba(255, 255, 255, 0.03))",
                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="py-[10px] px-[10px] !text-[#009193] border-[1px] flex flex-row !gap-2 items-center justify-center rounded-[4px] border-[#0F413C]"
            >
              <BellIcon />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
