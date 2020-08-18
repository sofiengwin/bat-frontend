import {IMatch, matchFields} from './Match';

export const tipFields = `
  id
  rating
  outcome
  bet
  match {
    ${matchFields}
  }
  odd
`;

export type IOUTCOME = 'PENDING' | 'WON' | 'LOST';

export interface ITip {
  id: string;
  rating: string;
  outcome: IOUTCOME;
  bet: string;
  match: IMatch;
  odd: number;
}

