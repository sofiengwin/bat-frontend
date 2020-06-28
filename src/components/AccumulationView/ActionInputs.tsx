import * as React from 'react';
import TextInput from '../ui/TextInput';
import styled from '../../styles';

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  justify-content: space-between;
`;


interface Props {
  odds: number;
  winnings: number;
  stake: number;
  setStake: (stake: number) => void;
}


const ActionInputs: React.FC<Props> = ({odds, winnings, stake, setStake}) => {
  return (
    <Flex>
      <TextInput value={Math.round(odds)}  onChange={(_: React.ChangeEvent<HTMLInputElement>) => null} addonBefore={'Odds'}/>
      <TextInput value={stake}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStake(Number(e.target.value))} addonBefore={'Stake'} />
      <TextInput value={Math.round(winnings)}  onChange={(_: React.ChangeEvent<HTMLInputElement>) => null} addonBefore={'Winnings'} />
    </Flex>
  );
}

export default ActionInputs;