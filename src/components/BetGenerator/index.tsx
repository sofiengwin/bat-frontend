import * as React from 'react';
import {Slider} from 'antd';

const BetGenerator = () => {
  const [oddRange, setOddRange] = React.useState<[number, number]>([1.5, 2.5])
  const onChange = (value: any) => {
    console.log({value})
    setOddRange(value);
  }
  return (
    <>
      <Slider
        range
        defaultValue={oddRange}
        max={4.1}
        min={1.1} 
        tooltipVisible
        step={0.1}
        onChange={onChange}
      />
    </>
  )
}

export default BetGenerator;