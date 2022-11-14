import * as React from 'react';
import { gql, useQuery } from "@apollo/client";

import { fetchTipQuery, Response } from '../../data/graphql/fetchTips';
import AppLooadingModal from '../ui/AppLoadingModal'
import CustomList from '../CustomList';
import Item from '../ValueAccumulations/Item';
import { ITip } from '../../models/Tip';

const HomePage = () => {
  const {loading, data, error} = useQuery<Response, {}>(gql(fetchTipQuery), {variables: {currentTips: []}});
  console.log({loading, data, error})
  const tips: ITip[] = data ? data.fetchTips : [];
  return (
    <>
      {loading ? (
        <AppLooadingModal visible={loading} />
      ) : (
        <CustomList
          tips={tips}
          header={<h3>Today's Betting Tips</h3>}
        >
          {(leagueTips) => (
            <Item leagueTips={leagueTips} loading={loading} />
          )}
        </CustomList>
      )}
    </>
  );
}

export default HomePage;
