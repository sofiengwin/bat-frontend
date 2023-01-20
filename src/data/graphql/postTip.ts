export const QUERY = `
  mutation createUserTip($homeTeamName: String!, $awayTeamName: String!, $fixtureId: ID!, $league: String!, $country: String!, $bet: String!, $betCategory: String!, $odd: String!, $startAt: String!) {
    createUserTip(input: {homeTeamName: $homeTeamName, awayTeamName: $awayTeamName, fixtureId: $fixtureId, league: $league, country: $country, bet: $bet, betCategory: $betCategory, odd: $odd, startAt: $startAt}) {
      tip {
        bet
        betCategory
        odd
        match {
          homeTeamName
          awayTeamName
          fixtureId,
          league
          country
          startAt
        }
      }
      errors {
        field
        code
      }
    }
  }
`;


export interface Response {
  createUserTip: {
    tip: any;
    errors: any;
  }
}
