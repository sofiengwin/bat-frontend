import * as React from 'react';
import Accumulation from './Accumulation';
import styled from '../../styles';

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const accas = Array(10).fill(1);

const ValueAccumulations = () => {
  return (
    <Grid>
      {accas.map((_, index) => (
        <Accumulation data={data} key={index}/>
      ))}
    </Grid>
  );
}

export default ValueAccumulations;