import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AccumulationView from "./components/AccumulationView";
import App from "./components/App";
import BetGenerator from './components/BetGenerator';
import Bookmakers from './components/Bookmakers';
import Fosterage from "./components/Fosterage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import Match from "./components/Match/";
import Offers from "./components/Offers/index";
import Points from './components/Points';
import PostTip from "./components/PostTip";
import Profile from "./components/Profile";
import TipDashboard from "./components/TipDashboard/TipDashboard";
import TipsAndHistory from "./components/TipsAndHistory";
import Trending from './components/Trending';
import ValueAccumulations from "./components/ValueAccumulations";
//import NoMatch from './components/NoMatch';
import TrackPageView from './components/PageTracking';
import * as serviceWorker from "./serviceWorker";
import "./styles/main.css";


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
      <App>
        <Router>
          <Switch>
            <Layout>
              <Route path="/" component={TrackPageView} />
              <Route exact path='/profile/:userId' component={Profile} />
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
              {/* <Route path='/matches/:matchId' render={() => <Match />} /> */}
              <Route
                path='/leagues/:leagueId'
                render={() => (
                  <TipsAndHistory loadTips={() => console.log("loading more")} />
                )}
              />
              <Route path='/offers' render={() => <Offers />} />
              <Route path='/bookmakers' render={() => <Bookmakers /> } />
              <Route
                path='/matches/:matchId'
                render={() => <Match />}
              />
              <Route
                path='/value-accumulators/:accumulationId'
                render={() => <AccumulationView />}
              />
              <Route
                path='/value-accumulators'
                render={() => <ValueAccumulations />}
              />
              <Route
                path='/trending-bets'
                render={() => <Trending />}
              />
              <Route
                path='/user-ranking'
                render={() => <Points />}
              />
              <Route
                path='/bet-generator'
                render={() => <BetGenerator />}
              />
              <Route exact path='/' component={HomePage} />
              {/* <Route path="*">
                <NoMatch />
              </Route> */}
            </Layout>
          </Switch>
        </Router>
      </App>
    </Fosterage>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
