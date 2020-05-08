import React from "react";
import { Flex, Header, Rule, FlexContainer, SmallCard } from "./style";
import DisplayCard from "./Cards";

const OneWayComparison = () => {
  return (
    <DisplayCard>
      <FlexContainer>
        <div>
          <Flex>
            <Header>Home</Header>
            <Header>-Draw- </Header>
            <Header>Away </Header>
          </Flex>
          <Rule />
        </div>
        <Flex>
          <SmallCard leftRadius='0.3em' padding='0.2em 0.8em'>
            <div className='btn-content'>
              <h1>
                36<sub>%</sub>
              </h1>
              <p>HOME WIN</p>
            </div>
          </SmallCard>
          <div>
            <div className='btn-content'>
              <h3
                style={{
                  color: "#1F3672",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                33<sub>%</sub>
              </h3>
              <p
                style={{
                  color: "#1F3672",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                DRAW
              </p>
            </div>
            <SmallCard height='60px' background='#475A8B'></SmallCard>
          </div>
          <div className='small-btn'>
            <div className='btn-content'>
              <h3
                style={{
                  color: "#1F3672",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                31<sub>%</sub>
              </h3>
              <p
                style={{
                  color: "#1F3672",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                Away
              </p>
            </div>
            <SmallCard
              height='40px'
              background='#778ABA'
              rightRadius='0.3em'
            ></SmallCard>
          </div>
        </Flex>
        <Flex>
          <Header>Home</Header>
          <Header>-Draw- </Header>
          <Header>Away </Header>
        </Flex>
      </FlexContainer>
    </DisplayCard>
  );
};

export default OneWayComparison;
