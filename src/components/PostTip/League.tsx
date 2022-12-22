import * as React from "react";
import { Card } from "antd";

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

class Leagues extends React.Component {
  render() {
    return (
      <Flex style={{ flexDirection: "column" }}>
        {england.map((league: any, index: number) => {
          return (
            <StyledCard key={index}>
              <Flex style={{ flexDirection: "column" }}>
                <p>{league}</p>
              </Flex>
            </StyledCard>
          );
        })}
      </Flex>
    );
  }
}

export default Leagues;