"use client";
import Typography from "@/design-systems/Atoms/Typography";
import BoxBackground from "@/design-systems/Atoms/box-background";
import Divider from "@/design-systems/Atoms/divider";
import React from "react";
import TableData from "@/design-systems/Organisms/Table";
import { useAccount } from "wagmi";
import { GraphSection } from "@/design-systems/Organisms/Graph/graph";

const OverviewTemplate = () => {
  const { address } = useAccount();

  return (
    <div>
      <div className="flex flex-col gap-2">
        <Typography
          className="text-2xl font-semibold text-white font-inter
     "
        >
          My Portfolio
        </Typography>
        {address && (
          <Typography
            className="text-xs font-normal text-[#939191] font-inter
     "
          >
            {`${address.slice(0, 5)}.....${address.slice(
              address.length - 5,
              address.length
            )}`}
          </Typography>
        )}
      </div>
      <div>
        <BoxBackground className="mt-10">
          <div className="w-full flex flex-row">
            <div className="p-6 w-[30%] border-r-[1px] border-[#262626]">
              <div>
                <Typography
                  className="text-xs mb-2 font-normal text-[#BABABA] font-inter
     "
                >
                  Portfolio
                </Typography>
                <Typography
                  className="text-2xl  font-medium text-white font-inter
     "
                >
                  $241,500.28
                </Typography>
              </div>

              <Divider />
              <div>
                <div className="flex mb-2 flex-row justify-between">
                  <Typography
                    className="text-xs font-normal text-[#939191] font-inter
     "
                  >
                    24h PnL
                  </Typography>
                  <div className="flex flex-row gap-1">
                    <Typography
                      className="text-xs font-semibold text-[#0C9] font-inter
     "
                    >
                      + $1001.54
                    </Typography>
                    <Typography
                      className="text-xs font-normal text-[#0C9] font-inter
     "
                    >
                      (18.27%)
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Typography
                    className="text-xs font-normal text-[#939191] font-inter
     "
                  >
                    Total PnL
                  </Typography>
                  <div className="flex flex-row gap-1">
                    <Typography
                      className="text-xs font-semibold text-[#0C9] font-inter
     "
                    >
                      + $1001.54
                    </Typography>
                    <Typography
                      className="text-xs font-normal text-[#0C9] font-inter
     "
                    >
                      (18.27%)
                    </Typography>
                  </div>
                </div>
              </div>
              <Divider />
              <div>
                <div className="flex mb-2 flex-row justify-between">
                  <Typography
                    className="text-xs font-normal text-[#939191] font-inter
     "
                  >
                    Account Leverage
                  </Typography>
                  <div className="flex flex-row gap-1">
                    <Typography
                      className="text-xs font-semibold text-white font-inter
     "
                    >
                      55.2x
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Typography
                    className="text-xs font-normal text-[#939191] font-inter
     "
                  >
                    Staked Liquidity
                  </Typography>
                  <div className="flex flex-row gap-1">
                    <Typography
                      className="text-xs font-semibold text-white font-inter
     "
                    >
                      223.11
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Graph Section */}
            <GraphSection />
          </div>
        </BoxBackground>

        {/* Statics Card */}

        <div className="flex mb-4 flex-row gap-5 mt-4">
          <BoxBackground className="w-[25%] p-6">
            <div className="flex mb-2 flex-row justify-between">
              <Typography
                className="text-xs font-normal text-[#E8E8E8] font-inter
     "
              >
                PnL
              </Typography>
              <Typography
                className="text-xs font-semibold text-[#059669] font-inter
     "
              >
                + $1001.54
              </Typography>
            </div>
            <Typography
              className="text-xl  font-medium text-[#059669] font-inter
     "
            >
              $241,500.28
            </Typography>
          </BoxBackground>

          <BoxBackground className="w-[25%] p-6">
            <div className="flex mb-2 flex-row justify-between">
              <Typography
                className="text-xs font-normal text-[#E8E8E8] font-inter
     "
              >
                Liquidity Pool Provided
              </Typography>
            </div>
            <Typography
              className="text-xl  font-medium text-[#E8E8E8] font-inter
     "
            >
              $241,500.28
            </Typography>
          </BoxBackground>

          <BoxBackground className="w-[25%] p-6">
            <div className="flex mb-2 flex-row justify-between">
              <Typography
                className="text-xs font-normal text-[#E8E8E8] font-inter
     "
              >
                Liquidity Pool Bonded
              </Typography>
            </div>
            <Typography
              className="text-xl  font-medium text-[#E8E8E8] font-inter
     "
            >
              $241,500.28
            </Typography>
          </BoxBackground>
          <div
            style={{
              borderRadius: "8px",
              background:
                "linear-gradient(to bottom,#03463f 40%, #25272A 100%), var(--T-Card-1-BG-1, #1B1C1E)",
            }}
            className="w-[25%] overflow-hidden rounded-lg p-[2px]"
          >
            <div
              style={{
                background:
                  "linear-gradient(to left,#38D8C8 40%, #25272A 100%), var(--T-Card-1-BG-1, #1B1C1E)",

                boxShadow:
                  "0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.16)",
              }}
              className="rounded-lg h-full"
            >
              <div
                style={{ background: "#1b1c1eb8" }}
                className="rounded-lg h-full p-6"
              >
                <div className="flex mb-2 flex-row justify-between">
                  <Typography
                    className="text-xs font-normal text-[#E8E8E8] font-inter
     "
                  >
                    Rewards
                  </Typography>
                </div>
                <Typography
                  className="text-xl  font-medium text-[#E8E8E8] font-inter
     "
                >
                  $241,500.28
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <TableData />
      </div>
    </div>
  );
};

export default OverviewTemplate;
