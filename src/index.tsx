import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import PostTip from "./components/PostTip";
import TipsAndHistory from "./components/TipsAndHistory";
import AccumulationView from "./components/AccumulationView";
import ValueAccumulations from "./components/ValueAccumulations";
import Trending from './components/Trending';
import BetGenerator from './components/BetGenerator';
import Points from './components/Points';
import Bookmakers from './components/Bookmakers';

import * as serviceWorker from "./serviceWorker";

import "./styles/main.css";
import Match from "./components/Match/";
import Offers from "./components/Offers/index";
import TipDashboard from "./components/TipDashboard/TipDashboard";
import Fosterage from "./components/Fosterage";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_HOST,
  headers: {
    authorization: localStorage.getItem('session') || null
  },
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Fosterage>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/' component={HomePage} />
            <Route path='/profile' component={Profile} />
            <Route path='/tip' component={TipDashboard} />
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
            <Route path='/offers' render={() => <Offers />} />
            <Route path='/bookmakers' render={() => <Bookmakers /> } />
            <Route
              path='/value-accumulators/:id'
              render={() => <AccumulationView />}
            />
            <Route
              exact path='/value-accumulators'
              render={() => <ValueAccumulations />}
            />
            <Route
              exact path='/trending-bets'
              render={() => <Trending />}
            />
            <Route
              exact path='/user-ranking'
              render={() => <Points />}
            />
            <Route
              exact path='/bet-generator'
              render={() => <BetGenerator />}
            />
          </Layout>
        </Switch>
      </Router>
    </Fosterage>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
