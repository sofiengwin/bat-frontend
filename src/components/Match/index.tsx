import * as React from 'react';
import { gql, useQuery } from "@apollo/client";

import { fetchTipQuery, FilterOptions, Response } from '../../data/graphql/fetchTips';
import AppLooadingModal from '../ui/AppLoadingModal'
import CustomList from '../CustomList';
import Item from '../ValueAccumulations/Item';
import { ITip } from '../../models/Tip';
import { IMatch } from '../../models/Match';
import { useParams } from 'react-router-dom';

const Match = () => {
  const {matchId} = useParams<{matchId: string}>();
  const {loading, data, error} = useQuery<Response, FilterOptions>(gql(fetchTipQuery), {variables: {matchId: matchId, currentTips: []}});
  console.log({loading, data, error, matchId})
  const tips: ITip[] = data ? data.fetchTips : [];
  const match: IMatch | null = tips.length > 0 ? tips[0].match : null;
  return (
    <>
      {loading ? (
        <AppLooadingModal visible={loading} />
      ) : (
        <CustomList
          tips={tips}
          header={match && <h3>{match.homeTeamName} vs {match.awayTeamName} Tips</h3>}
        >
          {(leagueTips) => (
            <Item leagueTips={leagueTips} loading={loading} />
          )}
        </CustomList>
      )}
    </>
  );
}

export default Match;
