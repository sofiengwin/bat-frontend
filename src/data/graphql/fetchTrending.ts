import { ITrend, trendFields } from "../../models/Trend";

export const fetchTrendingQuery = `
  query fetchTrending {
    fetchTrending {
      ${trendFields}
    }
  }
`;

export interface Response {
  fetchTrending: ITrend[];
}