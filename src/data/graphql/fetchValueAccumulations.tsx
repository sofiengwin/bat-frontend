import {IAccumulation, accumulationFields} from '../../models/Accumulation';


export const fetValueAccumulationsQuery = `
  query fetchValueAccumulations {
    fetchValueAccumulations {
      ${accumulationFields}
    }
  }
`

export interface Response {
  fetchValueAccumulations: IAccumulation[];
}