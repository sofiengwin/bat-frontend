import * as React from 'react';
import Accumulation from './Accumulation';
import styled from '../../styles';
import { IOUTCOME } from './OutcomeIcon';

const outcomes = ['PENDING', 'WON', 'LOST'];

const match = {
  id: 1,
  odd: 1.5,
  league: 'Premier League',
  country: 'England', 
  confidence: '80.0%',
}

const data = Array(10).fill(undefined).map((_, i) => ({...match, id: i + 1, outcome: outcomes[Math.floor(Math.random() * outcomes.length)]}))

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const accas = Array(10).fill(1);

const ListAccumulations = () => {
  console.log(outcomes[Math.floor(Math.random() * outcomes.length)])
  return (
    <Grid>
      {accas.map((_, index) => (
        <Accumulation data={data} key={index} outcome={outcomes[Math.floor(Math.random() * outcomes.length)] as IOUTCOME}/>
      ))}
    </Grid>
  );
}

export default ListAccumulations;