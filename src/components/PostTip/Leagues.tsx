import * as React from "react";
import { Card } from "antd";

import styled from "../../styles";
import { IHandleStageSelect, IStage, ILeague } from "./data";

const Flex = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  margin: 0.4em 0 !important;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #e6ecf0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }
`;

const england = [
  "Premier League",
  "Championship",
  "League One",
  "League Two",
  "FA Cup",
  "EFL",
];

interface Props {
  leagues: ILeague[];
  nextStage: IStage;
  handleStageSelect: IHandleStageSelect;
}

const Leagues = ({leagues, nextStage, handleStageSelect}: Props) => {
  return (
    <Flex style={{ flexDirection: "column" }}>
      {leagues.map(({leagueName, leagueId}: ILeague, index: number) => {
        return (
          <StyledCard key={index} onClick={handleStageSelect({nextStage, value: {leagueId, league: leagueName}})}>
            <Flex style={{ flexDirection: "column" }}>
              <p>{leagueName}</p>
            </Flex>
          </StyledCard>
        );
      })}
    </Flex>
  );
}
export default Leagues;
