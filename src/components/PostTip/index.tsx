import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Countries from './Countries'
import Leagues from './Leagues'
import Fixtures from './Fixtures'
import Bets from './Bets'
import Why from './Why'

class PostTip extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Switch>
          <Route path={`/post-tip/countries/:countryId/leagues/:leagueId/matches/:matchId/:bet/why`} component={Why} />
          <Route path={`/post-tip/countries/:countryId/leagues/:leagueId/matches/:matchId`} component={Bets} />
          <Route path='/post-tip/countries/:countryId/leagues/:leagueId' component={Fixtures} />
          <Route path='/post-tip/countries/:countryId' component={Leagues} />
          <Route exact path='/post-tip/countries' component={Countries} />
        </Switch>
      </div>
    );
  }
}

export default PostTip;