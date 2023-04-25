import * as React from 'react';
import styled from '../../styles';
import {ITip} from './data';

const Flex = styled.div`
  display: flex;
`;

const Summary = (props: ITip) => {
  return (
    <Flex style={{flexDirection: 'column'}}>
      <p>{props.homeTeamName}</p>
      <p>{props.awayTeamName}</p>
      <p>{props.country}</p>
      <p>{props.league}</p>
      <p>{props.leagueId}</p>
      <p>{props.bet}</p>
      <p>{props.betCategory}</p>
      <p>{props.odd}</p>
      <p>{props.startAt}</p>
    </Flex>
  );
}

export default Summary;
