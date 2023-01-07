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
      {stage === 'country' && <Countries
        nextStage='league'
        countries={countries}
        handleStageSelect={handleStageSelect}
      />}
      {stage === 'league' && <Leagues
        nextStage='fixtures'
        leagues={countryLeagueMap[tip.country ? tip.country : 'England']}
        handleStageSelect={handleStageSelect}
      />}
      {stage === 'fixtures' && <Fixtures
        nextStage='bet'
        handleStageSelect={handleStageSelect}
        leagueId={tip.leagueId || 1}
        leagueName={tip.leagueName}
      />}

      {stage === 'bet' && <Bets fixtureId={tip.fixtureId}/>}

      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </div>
  );
}

export default PostTip;
