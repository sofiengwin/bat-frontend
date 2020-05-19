import * as React from 'react';
import styled from '../../styles';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 24fr 1fr 1fr;
  grid-column-gap: 15px;
`;

interface Props {
  action: () => void;
  actionName: string;
}

const Item: React.FC<Props> = ({action, actionName}) => {
  return (
    <Flex>
      <div>
        Home vs Away
      </div>
      <div>
        10.0
      </div>
      <div>
        89%
      </div>
    </Flex>
  );
}

export default Item;