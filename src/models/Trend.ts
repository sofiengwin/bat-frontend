export const trendFields = `
  homeTeamName
  awayTeamName
  league
  country
  tipCount
  matchId
`;

export interface ITrend {
  homeTeamName: string;
  awayTeamName: string;
  league: string;
  country: string;
  tipCount: number;
  matchId: string;
}