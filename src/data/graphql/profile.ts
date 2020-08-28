import { IAccumulation, accumulationFields } from "../../models/Accumulation";
import { ITip, tipFields } from "../../models/Tip";
import {userFields, IUser} from '../../models/User';

export const profileQuery = `
  query profile($userId: ID!) {
    profile(userId: $userId) {
      ${userFields}
      totalTips
      totalWins
      totalPoints
      accumulations {
        ${accumulationFields}
      }
      tips {
        ${tipFields}
      }
    }
  }
`;

export interface Response {
  profile: IUser & {
    accumulations: IAccumulation[],
    tips: ITip[],
    totalTips: number;
    totalWins: number;
    totalPoints: number;
  }
}