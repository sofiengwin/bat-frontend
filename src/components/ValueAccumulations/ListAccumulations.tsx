import * as React from 'react';
import Accumulation from './Accumulation';
import styled from '../../styles';
import {IAccumulation} from '../../models/Accumulation';

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
`;

interface Props {
  accumulations: IAccumulation[]
}
const ListAccumulations: React.FC<Props> = ({accumulations}) => {
  console.log({accumulations})
  return (
    <Grid>
      {accumulations.map((accumulation, index) => (
        <Accumulation accumulation={accumulation} key={index} />
      ))}
    </Grid>
  );
}

export default ListAccumulations;