import { API_ENDPOINTS } from "@/utils/api-integration";
import CoreAPIService from "./CoreAPIService";
import { CryptoMarketData } from "@/hooks/api-hooks/useGraphData";

class HomeService {
  getGraphData = async (duration: number) => {
    return CoreAPIService.get<CryptoMarketData>(
      `${API_ENDPOINTS.PUBLIC.GET_GRAPH_DATA}&days=${duration}&interval=daily`
    );
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HomeService();
