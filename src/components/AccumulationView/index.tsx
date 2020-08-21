import * as React from 'react';
import View from './View';
import { useQuery } from '@apollo/react-hooks';
import { viewAccumulationQuery, Response } from '../../data/graphql/viewAccumulation';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';
import AppLoadingModal from '../ui/AppLoadingModal';

const AccumulationView = () => {
  const {accumulationId} = useParams();
  const {loading, data} = useQuery<Response, {accumulationId: string | undefined}>(gql(viewAccumulationQuery), {variables: {accumulationId}});

  console.log({data, accumulationId});
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