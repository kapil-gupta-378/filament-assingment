import React, { useState } from "react";
import Typography from "@/design-systems/Atoms/Typography";
import BoxBackground from "@/design-systems/Atoms/box-background";

const TableData = () => {
  const [tab, setTab] = useState<1 | 2 | 3>(1);
  const tableData = [
    {
      token: "BTC-PERP",
      type: "Market",
      positionSize: "20.44 USDC",
      collateral: "20.44 USDC",
      leverage: "25x",
      quantity: "4.25",
      entryPrice: "12.1252 USDC",
      takeProfit: "6.2525 USDC",
    },
    {
      token: "BTC-PERP",
      type: "Market",
      positionSize: "20.44 USDC",
      collateral: "20.44 USDC",
      leverage: "25x",
      quantity: "4.25",
      entryPrice: "12.1252 USDC",
      takeProfit: "6.2525 USDC",
    },
    {
      token: "BTC-PERP",
      type: "Market",
      positionSize: "20.44 USDC",
      collateral: "20.44 USDC",
      leverage: "25x",
      quantity: "4.25",
      entryPrice: "12.1252 USDC",
      takeProfit: "6.2525 USDC",
    },
  ];

  const headings = ["Positions", "Open Orders", "Rewards"];

  const tableCellStyle = "px-6 py-4";
  const tableHeaderStyle =
    "text-xs text-[#6B7280] font-inter font-medium border-y-[2px]";
  const tableRowStyle =
    "font-medium text-[#1F2937] font-inter whitespace-nowrap text-sm";
  const borderStyle = "border-b-[2px]";

  return (
    <BoxBackground className="p-0">
      <div className="flex flex-row gap-6 mx-6">
        {headings.map((heading, index) => (
          <div key={index} onClick={() => setTab((index + 1) as 1 | 2 | 3)}>
            <Typography
              className={`text-xs py-4 cursor-pointer font-semibold ${
                tab === index + 1
                  ? "text-[#fff]  border-b-[2px]"
                  : "text-[#BABABA]"
              } font-inter`}
            >
              {heading}
            </Typography>
          </div>
        ))}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full mt-1 text-sm text-left rtl:text-right text-gray-500 ">
          <thead className={tableHeaderStyle}>
            <tr>
              <th scope="col" className={tableCellStyle}>
                Token
              </th>
              <th scope="col" className={tableCellStyle}>
                Type
              </th>
              <th scope="col" className={tableCellStyle}>
                Positions Size
              </th>
              <th scope="col" className={tableCellStyle}>
                Collateral
              </th>
              <th scope="col" className={tableCellStyle}>
                Leverage
              </th>
              <th scope="col" className={tableCellStyle}>
                Quantity
              </th>
              <th scope="col" className={tableCellStyle}>
                Entry Price
              </th>
              <th scope="col" className={tableCellStyle}>
                Take Profit
              </th>
              <th scope="col" className={tableCellStyle}>
                Stop Loss
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, idx) => (
              <tr
                key={idx}
                className={`${tableRowStyle} ${
                  idx !== tableData.length - 1 && borderStyle
                }`}
              >
                <th scope="row" className={`${tableCellStyle} dark:text-white`}>
                  <div className="mb-1">{data.token}</div>
                  <div className="text-[10px] flex items-center justify-center bg-[#CCFBF1] text-[#115E59] p-1 rounded-md">
                    BUY / LONG
                  </div>
                </th>
                <td className={tableCellStyle}>{data.type}</td>
                <td className={tableCellStyle}>{data.positionSize}</td>
                <td className={tableCellStyle}>{data.collateral}</td>
                <td className={tableCellStyle}>{data.leverage}</td>
                <td className={tableCellStyle}>{data.quantity}</td>
                <td className={tableCellStyle}>{data.entryPrice}</td>
                <td className={tableCellStyle}>{data.takeProfit}</td>
                <td className={tableCellStyle}>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BoxBackground>
  );
};

export default TableData;
