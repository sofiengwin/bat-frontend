export const fetchRankingQuery = `
  query fetchRanking {
    fetchRanking {
      point
      name
    }
  }
`;

export interface IRank {
  point: number;
  name: string;
}

export interface Response {
  fetchRanking: IRank[];
}