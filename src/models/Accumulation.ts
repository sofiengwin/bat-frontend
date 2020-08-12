import {ITip, tipFields} from './Tip';

export const accumulationFields = `
  id
  rating
  tips {
    ${tipFields}
  }
`;

export interface IAccumulation {
  id: string;
  rating: string;
  tips: ITip[]
}