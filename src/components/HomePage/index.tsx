import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { fetchTipQuery, Response } from '../../data/graphql/fetchTips';
import AppLooadingModal from '../ui/AppLoadingModal'
import CustomList from '../CustomList';
import Item from '../ValueAccumulations/Item';
import { ITip } from '../../models/Tip';


const HomePage = () => {
  const {loading, data, error} = useQuery<Response, {}>(gql(fetchTipQuery));
  console.log({loading, data, error})
  const tips: ITip[] = data ? data.fetchTips : [];
  return (
    <>
      {loading ? (
        <AppLooadingModal visible={loading} />
      ) : (
        <CustomList tips={tips}>
          {(leagueTips) => (
            <Item leagueTips={leagueTips} loading={loading} />
          )}
        </CustomList>
      )}
    </>
  );
}

export default HomePage;
