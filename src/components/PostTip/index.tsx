import * as React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

import styled from "styled-components";
import { Button, Space } from "antd";
import { useParams, useNavigate } from "react-router-dom";

import Countries from "./Countries";
import Leagues from "./Leagues";
import Fixtures from "./Fixtures";
import Bets from "./Bets";
import {
  ITip,
  countries,
  countryLeagueMap,
  IHandleStageSelectParams,
} from "./data";
// import { useAppContext } from "../App";
// import { useFoster } from "../Fosterage";
import Summary from "./Summary";
import { useAppContext } from "../App";
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PostTip = () => {
  const [tip, setTip] = React.useState<ITip>({id: ''});

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

  const onSubmitTip = async () => {
    console.log({tip})
    try {
      setAppLoading(true)
      const docRef = await addDoc(collection(db, "tip"), {...tip, outcome: 'PENDING'});
      setAppLoading(false)
      navigate('/')
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setAppLoading(false)
      console.error("Error adding document: ", e);
    }
  }

  const showSubmitBtn = stage === "summary";
  const showBackBtn = stage === "country";

  const navigate = useNavigate();

  const {setAppLoading} = useAppContext()

  return (
    <Space direction="vertical">
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

      {stage === "summary" && <Summary
        {...tip}
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
    </Space>
  );
};

export default PostTip;
