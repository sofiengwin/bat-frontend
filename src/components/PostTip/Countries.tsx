import * as React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import styled from "../../styles";

const Flex = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  padding: 0;
  margin: 0.4em 0;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #e6ecf0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }
`;

const COUNTRIES = [
  "England",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "International Clubs",
];

class Countries extends React.Component {
  render() {
    return (
      <Flex style={{ flexDirection: "column" }}>
        {COUNTRIES.map((country: any, index: number) => {
          return (
            <StyledCard key={index}>
              <Link to={`/post-tip/countries/${country.toLowerCase()}`}>
                <Flex style={{ flexDirection: "column" }}>
                  <p>{country}</p>
                </Flex>
              </Link>
            </StyledCard>
          );
        })}
      </Flex>
    );
  }
}

export default Countries;
