import {accumulationFields, IAccumulation} from '../../models/Accumulation';

export const createAccumulationQuery = `
  mutation createAccumulation ($tips: [ID!]!) {
    createAccumulation(input: {tips: $tips}) {
      accumulation {
        ${accumulationFields}
      }
    }
  }
`

export interface Response {
  createAccumulation: IAccumulation;
}
