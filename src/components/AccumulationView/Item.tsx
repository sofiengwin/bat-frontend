import * as React from 'react';
import {Checkbox, List, Avatar, Button, Skeleton, Popover } from 'antd';
import {CloseCircleTwoTone} from '@ant-design/icons'
import styled from '../../styles';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr;
`;

const StyledPopover = styled(Popover)`
  .ant-popover & {
    width: 100%;
    background: red;
  }
`;

const PopoverTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface Props {
  action: () => void;
  actionName: string;
}

const Item: React.FC<Props> = ({action, actionName}) => {
  const [showPopover, setPop] = React.useState<boolean>(false);
  const content = (
    <div>
      <p>Odd: 1.0</p>
      <p>Confidence: 80%</p>
      <p>League: Premier League</p>
      <p>Country: England</p>
    </div>
  );
  return (
    <StyledPopover
      content={content}
      title={(): React.ReactNode => (
        <PopoverTitle>
          <span>HomeHomeHome vs AwayAwayAway</span>
          <span><CloseCircleTwoTone twoToneColor="red"/></span>
        </PopoverTitle>
      )}
      trigger="click"
      visible={showPopover}
      placement="topRight"
    >
      <Skeleton avatar title={false} loading={false} active>
        <div><Checkbox /></div>
        <div onClick={() => setPop(true)}>HomeHome vs AwayAway</div>
        <div>1.0</div>
        <div>80%</div>
        <div><CloseCircleTwoTone twoToneColor="red"/></div>
      </Skeleton>
    </StyledPopover>
  );
}

export default Item;  