import React from "react";
import {
  Container,
  CardGrid,
  Flex,
  Header,
  Rule,
  FlexContainer,
  SmallCard,
  BigCard,
  FirstCard,
  SecondCard,
  ThirdCard,
  List,
} from "./style";
import DisplayCard from "./Cards";

interface propsInterface {
  title: string;
  gtc: string;
}

const TwoWayComparison = ({ title, gtc }: propsInterface) => {
  return (
    <DisplayCard>
      <FlexContainer>
        <div>
          <Flex>
            <Header>{title}</Header>
          </Flex>
          <Rule />
        </div>
        <Flex>
          <BigCard gtc={gtc}>
            <FirstCard>
              <h2>{gtc.split(" ")[0]}</h2>
            </FirstCard>
            <ThirdCard>
              <h2>{gtc.split(" ")[1]}</h2>
            </ThirdCard>
          </BigCard>
        </Flex>
        <Flex>
          <Header>1X</Header>
          <Header>X2 </Header>
        </Flex>
      </FlexContainer>
    </DisplayCard>
  );
};

export default TwoWayComparison;
