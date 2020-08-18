import {ITip, tipFields} from './Tip';

export const accumulationFields = `
  id
  rating
  userName
  userId
  day
  tips {
    ${tipFields}
  }
`;

export interface IAccumulation {
  id: string;
  rating: string;
  userName: string;
  userId: string;
  day: string;
  tips: ITip[]
}