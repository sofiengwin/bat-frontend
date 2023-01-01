import * as React from 'react';

import Countries from './Countries'
import Leagues from './Leagues'
import Fixtures from './Fixtures'
import Bets from './Bets'
import { Button } from 'antd';
import {IStage, IHandleStageSelect, ITip, countries, countryLeagueMap} from './data';



const PostTip = () => {
  const [stage, setStage] = React.useState<IStage>('country');
  const [tip, setTip] = React.useState<ITip>({})

  const handleStageSelect = (nextStage: IStage, value: any) => {
    return () => {
      setTip({...tip, ...value});
      setStage(nextStage);
    }
  }

  return (
    <div>
      {stage && <Countries
        nextStage='league'
        countries={countries}
        handleStageSelect={handleStageSelect}
      />}
      {stage && <Leagues
        nextStage='league'
        leagues={countryLeagueMap[tip.country]}
        handleStageSelect={handleStageSelect}
      />}
      <h1>Hello World</h1>
      <Fixtures />
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </div>
  );
}

export default PostTip;
