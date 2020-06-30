import * as React from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import { List } from "antd";
import styled from '../../styles';
import OutcomeIcon, {IOUTCOME} from './OutcomeIcon';

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
  data: any[];
  outcome: IOUTCOME;
}

const Accumulation: React.FC<Props> = ({ data, outcome }) => {
  const header = (
    <Flex>
      <h3><Link to="value-accumulators/value-by-user">Value Bets By @user</Link> </h3>
      <OutcomeIcon outcome={outcome} fontSize={'25px'} />
    </Flex>
  );
  return (
    <>
      <StyledList
        outcome={outcome}
        header={header}
        bordered
        size='large'
        dataSource={data}
        renderItem={(match) => (
          <List.Item>
            <Item action={() => null} actionName="Remove" match={match}/>
          </List.Item>
        )}
      />
    </>
  );
};

export default Accumulation;
