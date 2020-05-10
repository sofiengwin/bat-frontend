import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import PostTip from "./components/PostTip";
import TipsAndHistory from "./components/TipsAndHistory";
import ValueAccumulations from "./components/ValueAccumulations";
import clientFactory, {mockClient} from "./lib/client";
import {Services} from './lib/useService';
import SessionService from './services/SessionService';

import * as serviceWorker from "./serviceWorker";

import "./styles/main.css";
import Match from "./components/Match";

// const client = clientFactory("", () => "fake.token");
const client = mockClient();
const sessionService = new SessionService({client});

const services = {
  sessionService,
}

ReactDOM.render(
  <Provider {...services}>
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={HomePage} />
          <Route path='/profile' component={Profile} />
          <Route path='/post-tip/countries' component={PostTip} />
          <Route
            path='/countries/:countryId'
            render={() => (
              <TipsAndHistory loadTips={() => console.log("loading more")} />
            )}
          />
          <Route
            path='/bets/:betId'
            render={() => (
              <TipsAndHistory loadTips={() => console.log("loading more")} />
            )}
          />
          <Route path='/matches/:matchId' render={() => <Match />} />
          <Route
            path='/leagues/:leagueId'
            render={() => (
              <TipsAndHistory loadTips={() => console.log("loading more")} />
            )}
          />
          <Route path='/offers' render={() => <h1>Coming soon</h1>} />
          <Route path='/bookmakers' render={() => <h1>Coming soon</h1>} />
          <Route
            path='/value-accumulators'
            render={() => <ValueAccumulations />}
          />
        </Layout>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
