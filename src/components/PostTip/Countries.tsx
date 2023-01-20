import * as React from "react";
import { Card } from "antd";

import styled from "../../styles";
import {IHandleStageSelect, IStage} from './data';

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

interface Props {
  countries: string[];
  nextStage: IStage;
  handleStageSelect: IHandleStageSelect;
}

const Countries = ({countries, handleStageSelect, nextStage}: Props) => {
  return (
    <Flex style={{ flexDirection: "column" }}>
      {countries.map((country: any, index: number) => {
        return (
          <StyledCard
            key={index}
            onClick={handleStageSelect({nextStage, value: {country}})}
          >
            <Flex style={{ flexDirection: "column" }}>
              <p>{country}</p>
            </Flex>
          </StyledCard>
        );
      })}
    </Flex>
  );
}

export default Countries;
