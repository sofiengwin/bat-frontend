import * as React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";

import Countries from "./Countries";
import Leagues from "./Leagues";
import Fixtures from "./Fixtures";
import Bets from "./Bets";
import {
  IStage,
  IHandleStageSelect,
  ITip,
  countries,
  countryLeagueMap,
} from "./data";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PostTip = () => {
  const [tip, setTip] = React.useState<ITip>({});

  const navigate = useNavigate();

  const { stage } = useParams<{ stage: string }>();

  const handleStageSelect = (nextStage: IStage, value: any) => {
    return () => {
      setTip({ ...tip, ...value });
      goNext(nextStage);
    };
  };

  const goNext = (value: string) => {
    navigate(`/post-tip/${value}?${stage}=${tip.country}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  const showSubmitBtn = stage === "bet";
  const showBackBtn = stage === "country";

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
          leagueName={tip.leagueName}
        />
      )}

      {stage === "bet" && <Bets fixtureId={tip.fixtureId} />}

      <Flex>
        {!showBackBtn && (
          <Button type="primary" htmlType="button" onClick={goBack}>
            Back
          </Button>
        )}

        {showSubmitBtn && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default PostTip;
