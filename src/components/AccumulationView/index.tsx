import * as React from 'react';
import View from './View';
import { viewAccumulationQuery, Response } from '../../data/graphql/viewAccumulation';
import { gql, useQuery } from "@apollo/client";

import { useParams } from 'react-router-dom';
import AppLoadingModal from '../ui/AppLoadingModal';

const AccumulationView = () => {
  const {accumulationId} = useParams<{accumulationId: string}>();
  const {loading, data, error} = useQuery<Response, {accumulationId: string | undefined}>(gql(viewAccumulationQuery), {variables: {accumulationId}});

  console.log({data, accumulationId, error});
  return (
    <>
      {data ? (
        <View accumulation={data.viewAccumulation.accumulation} availableTips={data.viewAccumulation.availableTips} />
      ) : (
        <AppLoadingModal visible={loading} />
      )}
    </>
  );
};

export default AccumulationView;