import * as React from 'react';
import {Slider, Card, Button} from 'antd';
import TextInput from '../ui/TextInput';
import { GeneratorOptions } from '../../data/graphql/betGenerator';

interface Props {
  onGenerate: (options: {variables: GeneratorOptions}) => void;
}

const BetGeneratorForm: React.FC<Props> = ({onGenerate}) => {
  const [oddRange, setOddRange] = React.useState<[number, number]>([1.5, 2.5])
  const [stake, setStake] = React.useState<string>('1000');
  const [winning, setWinning] = React.useState<string>('2500');

  const onChange = (value: any) => {
    console.log({value})
    setOddRange(value);
  }
  const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
    const averageOdd = oddRange.reduce((sum, current) => sum += current) / 2
    const amountToWin = averageOdd * Number(e.target.value);
    setStake(e.target.value);
    setWinning(String(amountToWin));
  }
  return (
    <>
      <Card title="Bet Generator" bordered={true} >
        <Slider
          range
          defaultValue={oddRange}
          max={4.1}
          min={1.1} 
          tooltipVisible
          step={0.1}
          onChange={onChange}
        />

        <TextInput
          value={stake}
          onChange={onChangeStake}
          addonBefore={'Stake'}
        />
        
        <TextInput
          value={winning}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWinning(e.target.value)}
          disabled={true}
          addonBefore={'Amount to win'}
        />
        
        <Button type="primary" block onClick={() => {
          onGenerate({variables: {
            minOdd: oddRange[0],
            maxOdd: oddRange[1],
            totalodds: 8.00,
          }})
        }}>
          Generate
        </Button>
      </Card>
    </>
  )
}

export default BetGeneratorForm;