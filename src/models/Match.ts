export const matchFields = `
  id
  homeTeamName
  awayTeamName
  score
  league
  country
`;

export interface IMatch {
  id: string;
  homeTeamName: string;
  awayTeamName: string;
  score: string;
  league: string;
  country: string;
}