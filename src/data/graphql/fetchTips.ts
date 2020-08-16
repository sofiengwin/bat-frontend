import {tipFields, ITip} from '../../models/Tip';
import {matchFields} from '../../models/Match';

export const fetchTipQuery = `
  query fetchTips {
    fetchTips {
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