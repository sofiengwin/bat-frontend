import * as React from 'react';
import {Checkbox, List, Avatar, Button, Skeleton, Popover } from 'antd';
import {CloseCircleTwoTone} from '@ant-design/icons'
import styled from '../../styles';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr;
`;

const PopoverTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`;

const MatchName = styled.div`
  display: flex;
`;

interface Props {
  action: () => void;
  actionName: string;
  match: any;
  selectedId: number;
  setSelected: (id: number) => void;
  onSelect?: (e: any) => void;
  render: () => React.ReactNode;
}

const Item: React.FC<Props> = (props) => {
  const content = (
    <div>
      <p>Odd: 1.0</p>
      <p>Confidence: 80%</p>
      <p>League: Premier League</p>
      <p>Country: England</p>
    </div>
  );

  return (
    <Popover
      content={content}
      title={(
        <PopoverTitle>
          <span>HomeHome vs AwayAway</span>
          <span><CloseCircleTwoTone twoToneColor="red" onClick={() => props.setSelected(0)}/></span>
        </PopoverTitle>
      )}
      trigger="click"
      visible={props.selectedId === props.match.id}
    >
      <Skeleton avatar title={false} loading={false}>
        <MatchName>
          <Checkbox onChange={props.onSelect} value={props.match.id}/>
          <div onClick={() => props.setSelected(props.match.id)} style={{marginLeft: '10px'}}>HomeHome vs AwayAway</div>
        </MatchName>
        <div>1.0</div>
        <div>80%</div>
        <div>{props.render()}</div>
      </Skeleton>
    </Popover>
  );
}

export default Item;  