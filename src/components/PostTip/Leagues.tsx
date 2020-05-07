import * as React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import styled from "../../styles";

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

const france = ["Ligue 1", "Ligue 2", "National"];

const spain = ["La Liga", "La Liga 2", "Second Division B"];

const germany = ["Bundesliga", "2nd Bundesliga", "3nd Bundesliga"];

const italy = ["Seria A", "Seria B"];

class Leagues extends React.Component {
  render() {
    return (
      <Flex style={{ flexDirection: "column" }}>
        {england.map((league: any, index: number) => {
          return (
            <StyledCard key={index}>
              <Link to={`/post-tip/countries/${index}/leagues/${league}`}>
                <Flex style={{ flexDirection: "column" }}>
                  <p>{league}</p>
                </Flex>
              </Link>
            </StyledCard>
          );
        })}
      </Flex>
    );
  }
}

export default Leagues;
