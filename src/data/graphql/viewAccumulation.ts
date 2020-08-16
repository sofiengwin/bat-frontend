import { IAccumulation, accumulationFields } from "../../models/Accumulation";
import { ITip, tipFields } from "../../models/Tip";

export const viewAccumulationQuery = `
  query viewAccumulation($accumulationId: ID!) {
    viewAccumulation(accumulationId: $accumulationId) {
      accumulation {
        ${accumulationFields}
      }
      availableTips {
        ${tipFields}
      }
    }
  }
`;

export interface Response {
  viewAccumulation: {
    accumulation: IAccumulation,
    availableTips: ITip[],
  }
}