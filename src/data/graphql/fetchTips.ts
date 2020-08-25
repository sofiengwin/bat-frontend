import {tipFields, ITip} from '../../models/Tip';
import {matchFields} from '../../models/Match';

export const fetchTipQuery = `
  query fetchTips($betType: String, $country: String, $maxOdd: Float, $minOdd: Float, $currentTips: [ID!]!) {
    fetchTips(betType: $betType, country: $country, maxOdd: $maxOdd, minOdd: $minOdd, currentTips: $currentTips) {
      ${tipFields}
      match {
        ${matchFields}
      }
    }
  }
`;

export interface Response {
  fetchTips: ITip[];
}

export interface FilterOptions {
  betType?: string;
  country?: string;
  maxOdd?: number;
  minOdd?: number;
  currentTips?: string[];
}