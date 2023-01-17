import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AccumulationView from "./components/AccumulationView";
import App from "./components/App";
import BetGenerator from "./components/BetGenerator";
import Bookmakers from "./components/Bookmakers";
import Fosterage from "./components/Fosterage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import Match from "./components/Match";
import Offers from "./components/Offers/index";
import Points from "./components/Points";
import Profile from "./components/Profile";
import TipDashboard from "./components/TipDashboard/TipDashboard";
import TipsAndHistory from "./components/TipsAndHistory";
import Trending from "./components/Trending";
import ValueAccumulations from "./components/ValueAccumulations";
import PostTip from "./components/PostTip";
//import NoMatch from './components/NoMatch';
// import TrackPageView from './components/PageTracking';
import * as serviceWorker from "./serviceWorker";
// import "./styles/main.css";
import "antd/dist/reset.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_HOST,
  headers: {
    authorization: localStorage.getItem("session") || "",
  },
  cache,
});

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Fosterage>
        <App>
          <Layout>
            <Routes>
              <Route path="/profile/:userId" element={<Profile />}></Route>
              <Route path="/tip" element={<TipDashboard />}></Route>
              <Route
                path="/countries/:countryId"
                element={
                  <TipsAndHistory
                    loadTips={() => console.log("loading more")}
                  />
                }
              ></Route>
              <Route
                path="/bets/:betId"
                element={
                  <TipsAndHistory
                    loadTips={() => console.log("loading more")}
                  />
                }
              ></Route>
              <Route
                path="/leagues/:leagueId"
                element={
                  <TipsAndHistory
                    loadTips={() => console.log("loading more")}
                  />
                }
              ></Route>

              <Route path="/offers" element={<Offers />}></Route>
              <Route path="/bookmakers" element={<Bookmakers />}></Route>
              <Route path="/matches/:matchId" element={<Match />}></Route>
              <Route
                path="/value-accumulators/:accumulationId"
                element={<AccumulationView />}
              />
              <Route
                path="/value-accumulators"
                element={<ValueAccumulations />}
              />
              <Route path="/trending-bets" element={<Trending />} />
              <Route path="/user-ranking" element={<Points />} />
              <Route path="/bet-generator" element={<BetGenerator />}></Route>
              <Route path="/post-tip/:stage" element={<PostTip />}></Route>
              <Route path="/" element={<HomePage />}></Route>
              {/* <Route path="*">
                <NoMatch />
              </Route> */}
            </Routes>
          </Layout>
        </App>
      </Fosterage>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
