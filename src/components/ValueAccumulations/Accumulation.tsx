import * as React from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import styled from '../../styles';
import OutcomeIcon from './OutcomeIcon';
import {IAccumulation} from '../../models/Accumulation';
import {IOUTCOME} from '../../models/Tip';
import CustomList from '../CustomList';
import { Button } from 'antd';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightblue;
  padding: 5px 10px;
  margin-bottom: -12px;
`;

const headerColor = {
  'LOST': 'rgba(233,134,111,0.4)',
  'WON': 'rgba(119,205,198,0.2)',
  'PENDING': 'white',
}
const StyledList = styled(CustomList)<{readonly outcome: IOUTCOME}>`
  .ant-list-header {
    background: ${(props) => headerColor[props.outcome] };
  }
`;


interface Props {
  accumulation: IAccumulation;
  loading?: boolean;
}

const Accumulation: React.FC<Props> = ({ accumulation, loading }) => {
  const {tips} = accumulation;
  const outcome = () => {
    const allOutcomes = tips.map(tip => tip.outcome);
    if (allOutcomes.includes('LOST')) {
      return 'LOST';
    } else if (allOutcomes.every(t => t === 'WON')) {
      return 'WON';
    } else {
      return 'PENDING'
    }
  };

  const onPersonalize = () => {
  }

  const header = (
    <Flex>
      <h3><Link to={`/value-accumulators/${accumulation.id}`}><h3>Value Bets By {accumulation.userName} for {accumulation.day} </h3></Link> </h3>
      {outcome() === 'PENDING' ? (<Button type="primary" shape="round" onClick={onPersonalize}><Link to={`/value-accumulators/${accumulation.id}`}>Edit</Link></Button>) : (<OutcomeIcon outcome={outcome()} fontSize={'25px'} />) }
    </Flex>
  );
  return (
    <>
      <StyledList
        outcome={outcome()}
        header={header}
        tips={tips}
      >
        {(leagueTips) => (
          <Item leagueTips={leagueTips} loading={loading} />
        )}
      </StyledList>
    </>
  );
};

export default Accumulation;
