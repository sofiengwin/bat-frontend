export const countries = [
  'England',
  'Spain',
  'Germany',
  'Italy',
  'France',
  // 'Belgium',
  // 'Brazil',
  // 'Canada',
  // 'United States',
  // 'Neatherland',
  // 'Scotland',
  // 'UEFA'
]

const englishLeagues = [
  { leagueName: 'Premier League', leagueId: 39},
  { leagueName: 'Championship', leagueId: 40},
  { leagueName: 'League One', leagueId: 41},
  { leagueName: 'League Two', leagueId: 42},
  { leagueName: 'EFL Trophy', leagueId: 46}
]

const spanishLeagues = [
  { leagueName: 'La Liga', leagueId: 140},
  { leagueName: 'Segunda División', leagueId: 141},
  { leagueName: 'Copa del Rey', leagueId: 143},
]

const germanLeagues = [
  {leagueName: 'Bundesliga', leagueId: 78},
  {leagueName: '2. Bundesliga', leagueId: 79},
  {leagueName: '3. Liga', leagueId: 80},
]

const italianLeagues = [
  {leagueName: 'Serie A', leagueId: 135},
  {leagueName: 'Serie B', leagueId: 136},
  {leagueName: 'Coppa Italia', leagueId: 137},
]

const frenchLeagues = [
  {leagueName: 'Ligue 1', leagueId: 61},
  {leagueName: 'Ligue 2', leagueId: 62},
  {leagueName: 'Coupe de France', leagueId: 66},
]

export const countryLeagueMap: Dict<ILeague[]> = {
  'England': englishLeagues,
  'Spain': spanishLeagues,
  'Germany': germanLeagues,
  'Italy': italianLeagues,
  'France': frenchLeagues,
}

export type IStage = 'country' | 'league' | 'fixtures' | 'bet' | 'summary';
export type IHandleStageSelect = (params: IHandleStageSelectParams) => () => void
export interface IHandleStageSelectParams {
  nextStage?: IStage;
  value: any
}

export interface ITip {
  id: string;
  awayTeamName?: string;
  homeTeamName?: string;
  country?: string;
  league?: string;
  leagueId?: number;
  bet?: string;
  betCategory?: string;
  fixtureId?: number;
  odd?: string;
  startAt?: number;
  outcome?: string;
}
export type IPostTipParams = Omit<ITip, 'leagueId'>
export type ILeague = {leagueName: string; leagueId: number};

// homeTeamName: 'Manchester United',
// awayTeamName: 'Chelsea',
// fixtureId: 7678998,
// league: 'Premier League',
// country: 'England',
// bet: 'Match Winner',
// betCategory: 'Home Win',
// odd: '1.55',
// startAt: start_at.to_i,


// astonvila 868246
// chelsea 868247
