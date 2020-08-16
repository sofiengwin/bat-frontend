import * as React from 'react';
import Accumulation from './Accumulation';
import styled from '../../styles';
import {IAccumulation} from '../../models/Accumulation';
import AppLoadingMoadl from '../ui/AppLoadingModal';

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
`;

interface Props {
  accumulations: IAccumulation[];
  loading?: boolean;
}
const ListAccumulations: React.FC<Props> = ({accumulations, loading}) => {
  return (
    <>
      {loading ? (
        <AppLoadingMoadl visible={loading} />
      ) : (

        <Grid>
          {accumulations.map((accumulation, index) => (
            <Accumulation accumulation={accumulation} key={index} loading={loading}/>
          ))}
        </Grid>
      )}
    </>
  );
}

export default ListAccumulations;