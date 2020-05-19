import * as React from 'react';
import {Checkbox, Button} from 'antd';
import styled from '../../styles';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr;
`;

interface Props {
  action: () => void;
  actionName: string;
}

const Item: React.FC<Props> = ({action, actionName}) => {
  return (
    <Flex>
      <div>
        <Checkbox onChange={() => null}>Home vs Away</Checkbox>
      </div>
      <div>
        10.0
      </div>
      <div>
        89%
      </div>
      <div>
        <Button type="primary">{actionName}</Button>
      </div>
    </Flex>
  );
}

export default Item;