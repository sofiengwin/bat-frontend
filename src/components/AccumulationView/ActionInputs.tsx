import * as React from 'react';
import TextInput from '../ui/TextInput';
import styled from '../../styles';

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledInput = styled(TextInput)`
  width: 100px;
`;

const ActionInputs = () => {
  return (
    <Flex>
      <StyledInput value={'10.0'}  onChnage={() => null} addonBefore={'Odds'}/>
      <StyledInput value={'10.0'}  onChnage={() => null} addonBefore={'Stake'}/>
      <StyledInput value={'10.0'}  onChnage={() => null} addonBefore={'Winnings'}/>
    </Flex>
  );
}

export default ActionInputs;