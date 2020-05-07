import * as React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import styled from "../../styles";

const Flex = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  margin: 0.4em 0;
  border-bottom: 1px solid #e6ecf0;
  background-color: #ffffff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #e6ecf0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }
`;

const StyledSpan = styled.span`
  color: gray;
  font-size: 10px;
  margin-top: -15px;
`;

const matches = [
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
  {
    match_hometeam_name: "Hello",
    match_awayteam_name: "Hey",
    time: "2019-02-03 21:00",
  },
];

class Fixtures extends React.Component {
  render() {
    return (
      <Flex style={{ flexDirection: "column" }}>
        {matches.map((match: any, index: number) => {
          return (
            <StyledCard key={index}>
              <Link
                to={`/post-tip/countries/${index}/leagues/${index}/matches/${match}`}
              >
                <Flex style={{ flexDirection: "column" }}>
                  <p>
                    {match.match_hometeam_name} vs {match.match_awayteam_name}
                  </p>
                  <StyledSpan>2019-02-03 21:00:</StyledSpan>
                </Flex>
              </Link>
            </StyledCard>
          );
        })}
      </Flex>
    );
  }
}

export default Fixtures;
