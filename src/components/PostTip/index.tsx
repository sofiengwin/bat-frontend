import * as React from "react";

import styled from "styled-components";
import { Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

import Countries from "./Countries";
import Leagues from "./Leagues";
import Fixtures from "./Fixtures";
import Bets from "./Bets";
import {
  ITip,
  countries,
  countryLeagueMap,
  IHandleStageSelectParams,
  IPostTipParams
} from "./data";
// import { useAppContext } from "../App";
// import { useFoster } from "../Fosterage";
import {QUERY as postTipQuery, Response} from '../../data/graphql/postTip'
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PostTip = () => {
  const [tip, setTip] = React.useState<ITip>({});

  const { stage } = useParams<{ stage: string }>();

  const handleStageSelect = ({nextStage, value}: IHandleStageSelectParams) => {
    return () => {
      setTip({ ...tip, ...value });
      console.log({value, tip})
      if (nextStage) {
        goNext(nextStage);
      }
    };
  };

  const goNext = (value: string) => {
    navigate(`/post-tip/${value}?${stage}=${tip.country}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  const onSubmitTip = () => {
    console.log({tip})
    postTip({
      variables: {
        homeTeamName: tip.homeTeamName,
        awayTeamName: tip.awayTeamName,
        fixtureId: tip.fixtureId,
        league: tip.league,
        country: tip.country,
        bet: tip.bet,
        betCategory: tip.betCategory,
        odd: '1.55',
        startAt: tip.startAt,
      }
    })
  }

  const showSubmitBtn = stage === "bet";
  const showBackBtn = stage === "country";

  const navigate = useNavigate();

  // const {foster, reset} = useFoster();
  // const {setAppLoading, addUser} = useAppContext()
  const onError = (_error: any) => {
    console.log({_error})
    // foster(() => <ErrorModal onCancel={reset} onOk={reset} show={true}/>)
  };

  const onCompleted = (data: Response) => {
    console.log({data})
    // if(data.createUser.errors) {
    //   foster(() => <ErrorModal onCancel={reset} onOk={reset} show={true}/>)
    // }

    // if (data.createUser.userDetails){
    //   localStorage.setItem('session', data.createUser.userDetails.accessToken);
    //   addUser(data.createUser.userDetails.user);
    //   navigate("/dashboard");

    // }
  };
  const [postTip, {loading}] = useMutation<Response, IPostTipParams>(gql(postTipQuery), {onCompleted, onError});
  console.log({loading})

  return (
    <div>
      {stage === "country" && (
        <Countries
          nextStage="league"
          countries={countries}
          handleStageSelect={handleStageSelect}
        />
      )}
      {stage === "league" && (
        <Leagues
          nextStage="fixtures"
          leagues={countryLeagueMap[tip.country ? tip.country : "England"]}
          handleStageSelect={handleStageSelect}
        />
      )}
      {stage === "fixtures" && (
        <Fixtures
          nextStage="bet"
          handleStageSelect={handleStageSelect}
          leagueId={tip.leagueId || 1}
          leagueName={tip.league}
        />
      )}

      {stage === "bet" && <Bets
        fixtureId={tip.fixtureId}
        handleStageSelect={handleStageSelect}
      />}

      <Flex>
        {!showBackBtn && (
          <Button type="primary" htmlType="button" onClick={goBack}>
            Back
          </Button>
        )}

        {showSubmitBtn && (
          <Button type="primary" htmlType="submit" onClick={onSubmitTip}>
            Submit
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default PostTip;
