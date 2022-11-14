import * as React from 'react';
import ListAccumulations from './ListAccumulations';
import { gql,useQuery } from '@apollo/client';
import {Response, fetValueAccumulationsQuery} from '../../data/graphql/fetchValueAccumulations';
import { IAccumulation } from '../../models/Accumulation';

const ValueAccumulations = () => {
  const {loading, data} = useQuery<Response, {}>(gql(fetValueAccumulationsQuery), {});
  const accumulations: IAccumulation[] = data ? data.fetchValueAccumulations : [];
  return (
    <ListAccumulations accumulations={accumulations} loading={loading} />
  );
}

export default ValueAccumulations;