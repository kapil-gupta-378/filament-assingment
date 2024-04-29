import { HomeService } from "@/api-services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export interface CryptoMarketData {
  prices: number[][];
  market_caps: number[][];
  [key: number]: number[];
  total_volumes?: number[][];
}

export const useGraphData = (intiDuration: number = 356) => {
  const [duration, setDuration] = useState(intiDuration);
  const { isLoading, error, data } = useQuery({
    queryKey: ["graphData", duration],
    queryFn: () => HomeService.getGraphData(duration),
    enabled: true,
    retry: false,
  });
  const graphData: CryptoMarketData = data || ({} as CryptoMarketData);
  return {
    isLoading,
    error,
    graphData,
    setDuration,
  };
};
