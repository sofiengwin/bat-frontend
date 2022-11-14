import * as React from 'react';
import {Slider, Card, Button, Form} from 'antd';
import TextInput from '../ui/TextInput';
import { GeneratorOptions } from '../../data/graphql/betGenerator';
import styled from '../../styles';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

interface Props {
  onGenerate: (options: {variables: GeneratorOptions}) => void;
  oddRange: [number, number];
  onChangeOdd: (oddRange: any) => void;
}

const BetGeneratorForm: React.FC<Props> = ({onGenerate, oddRange, onChangeOdd}) => {
  const [totalOdds, setTotalOdds] = React.useState<number>(3.5);
  const [stake, setStake] = React.useState<string>('1000');
  const [winning, setWinning] = React.useState<string>('3500');

  const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountToWin = totalOdds * Number(e.target.value);
    setStake(e.target.value);
    setWinning(String(amountToWin));
  }

  const onChangeTotalOdds = (value: any) => {
    setTotalOdds(value);
    setWinning(String(value * Number(stake)));
  }

  console.log({totalOdds})
  return (
    <>
      <Card title="Bet Generator" bordered={true} >
        <SliderContainer>
          <Form.Item label={"Odd Range"}>
            <Slider
              range
              defaultValue={oddRange}
              tooltipPlacement="bottom"
              max={4.1}
              min={1.1}
              tooltipVisible
              step={0.1}
              onChange={onChangeOdd}
            />
          </Form.Item>
        </SliderContainer>

        <SliderContainer>
          <Form.Item label="Total Odds">
            <Slider
              defaultValue={totalOdds}
              tooltipPlacement="bottom"
              tooltipVisible
              step={0.5}
              max={10.00}
              min={1.5}
              onChange={onChangeTotalOdds}
            />
          </Form.Item>
        </SliderContainer>

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
            totalodds: totalOdds,
          }})
        }}>
          Generate
        </Button>
      </Card>
    </>
  )
}

export default BetGeneratorForm;