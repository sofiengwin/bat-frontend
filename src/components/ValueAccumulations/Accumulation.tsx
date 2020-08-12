import * as React from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import { List } from "antd";
import styled from '../../styles';
import OutcomeIcon from './OutcomeIcon';
import {IAccumulation} from '../../models/Accumulation';
import {IOUTCOME, ITip} from '../../models/Tip';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const headerColor = {
  'LOST': 'rgba(233,134,111,0.4)',
  'WON': 'rgba(119,205,198,0.2)',
  'PENDING': 'white',
}
const StyledList = styled(List)<{readonly outcome: IOUTCOME}>`
  .ant-list-header {
    background: ${(props) => headerColor[props.outcome] };
  }
`;


interface Props {
  accumulation: IAccumulation;
}

const Accumulation: React.FC<Props> = ({ accumulation }) => {
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

  const header = (
    <Flex>
      <h3><Link to="value-accumulators/value-by-user">Value Bets By @user</Link> </h3>
      <OutcomeIcon outcome={outcome()} fontSize={'25px'} />
    </Flex>
  );
  return (
    <>
      <StyledList
        outcome={outcome()}
        header={header}
        bordered
        size='large'
        dataSource={accumulation.tips}
        renderItem={(tip) => (
          <List.Item>
            <Item tip={tip as ITip} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Accumulation;
