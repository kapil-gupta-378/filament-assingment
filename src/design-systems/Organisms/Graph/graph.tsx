import DropDown from "@/design-systems/Atoms/DropDown";
import Spinner from "@/design-systems/Atoms/Spinner";
import { dropdownOption } from "@/design-systems/Templates/overview-template/utils";
import { useGraphData } from "@/hooks/api-hooks/useGraphData";
import { getTime } from "@/utils/helper";
import { useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const GraphSection = () => {
  const [mounted, setMounted] = useState(false);
  const { isLoading, graphData, setDuration } = useGraphData();
  const [graphType, setGraphType] = useState<1 | 2>(1);
  const formattedGraphData = useMemo(() => {
    return graphData?.prices?.map((value) => {
      return {
        name: getTime(value[0]),
        amt: value[1],
      };
    });
  }, [graphData]);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="m-6 relative w-full h-full">
      <div className="flex mb-7 flex-row justify-between">
        <div className="flex flex-row rounded-md h-fit border-[1px] border-[#34363C] bg-[#26282C]">
          <div
            className={`flex cursor-pointer mx-[2px] my-[2px]  text-[#BABABA] rounded-md text-base font-normal justify-center items-center py-[5px] px-[10px] ${
              graphType === 1 && "bg-[#1A1A1A] text-white"
            }`}
            onClick={() => setGraphType(1)}
          >
            Portfolio
          </div>
          <div
            className={`flex cursor-pointer mx-[2px] my-[2px]  text-[#BABABA] rounded-md text-base font-normal justify-center items-center py-[5px] px-[10px] ${
              graphType === 2 && "bg-[#1A1A1A] text-white"
            }`}
            onClick={() => setGraphType(2)}
          >
            PnL
          </div>
        </div>
        <div className="w-[131px] h-fit">
          <DropDown
            className=" text-white  rounded-md  border-[1px] border-[#34363C] bg-[#26282C]"
            data={dropdownOption}
            defaultValue={{
              value: 1,
              name: "1 Year",
            }}
            onChange={(value) => {
              setDuration(value.value);
            }}
          />
        </div>
      </div>

      {mounted && !isLoading ? (
        <ResponsiveContainer
          initialDimension={{ height: 200, width: 700 }}
          width="100%"
          height="100%"
        >
          <AreaChart
            width={730}
            height={250}
            data={formattedGraphData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop stop-color="#40E0D0" stop-opacity="0.1" />
                <stop offset="1" stop-color="#40E0D0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#313131"
              fillOpacity={0.1}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#40E0D0"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="w-full h-full flex flex-row items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};
