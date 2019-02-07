import * as React from 'react';
import {Card, Avatar, Icon, Button, Tabs, Tooltip} from 'antd'
import styled from '../../styles/'
import Tip from './Tip';
const TabPane = Tabs.TabPane;

interface Props {
}

const text = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const StyledCard = styled(Card)`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  .ant-card-wider-padding {
    padding: unset;
  }
  .ant-card-body {
    padding: unset;
  }
  &:hover {
    background-color: #e6ecf0
  }
`;

const Text = styled.div`
  color: #14171a;
`;

const Flex = styled.div`
  display: flex;
`

class Tips extends React.Component<Props> {
  render() {
    return (
      <div>
        {Array(5).fill(0).map((_, index) => {
          return <Tip key={index}/>
        })}
      </div>
    );
  }
}

export default Tips;