import * as React from 'react';
import styled from '../../styles';
import OutcomeIcon from './OutcomeIcon';
import { ITip } from '../../models/Tip';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 24fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
`;

interface Props {
  tip: ITip;
}

const Item: React.FC<Props> = ({tip}) => {
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
      <div>
        <OutcomeIcon outcome={tip.outcome} fontSize='16px' />
      </div>
    </Flex>
  );
}

export default Item;