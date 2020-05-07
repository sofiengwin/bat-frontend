import * as React from "react";
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
import DisplayCard from "./card";
import LongCard from "./longcard";

export default class Match extends React.Component {
  render() {
    return (
      <Container>
        <CardGrid>
          {/* First Card */}
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

          {/* Second Card */}
          <DisplayCard>
            <FlexContainer>
              <div>
                <Flex>
                  <Header>DOUBLE CHANCE</Header>
                </Flex>
                <Rule />
              </div>
              <Flex>
                <BigCard gtc='70% 30%'>
                  <FirstCard>
                    <h2>70%</h2>
                  </FirstCard>
                  <ThirdCard>
                    <h2>30%</h2>
                  </ThirdCard>
                </BigCard>
              </Flex>
              <Flex>
                <Header>1X</Header>
                <Header>X2 </Header>
              </Flex>
            </FlexContainer>
          </DisplayCard>

          {/* Second Card */}
          <DisplayCard>
            <FlexContainer>
              <div>
                <Flex>
                  <Header>BOTH TEAMS TO SCORE</Header>
                </Flex>
                <Rule />
              </div>
              <Flex>
                <BigCard gtc='44% 56%'>
                  <FirstCard>
                    <h2>44%</h2>
                  </FirstCard>
                  <ThirdCard>
                    <h2>56%</h2>
                  </ThirdCard>
                </BigCard>
              </Flex>
              <Flex>
                <Header>YES</Header>
                <Header>NO </Header>
              </Flex>
            </FlexContainer>
          </DisplayCard>

          {/* Third Card */}
          <DisplayCard>
            <FlexContainer>
              <div>
                <Flex>
                  <Header>OVER / UNDER 1.5</Header>
                </Flex>
                <Rule />
              </div>
              <Flex>
                <BigCard gtc='25% 75%'>
                  <FirstCard>
                    <h2>25%</h2>
                  </FirstCard>
                  <ThirdCard>
                    <h2>75%</h2>
                  </ThirdCard>
                </BigCard>
              </Flex>
              <Flex>
                <Header>YES</Header>
                <Header>NO </Header>
              </Flex>
            </FlexContainer>
          </DisplayCard>

          {/* Fourth Card */}
          <DisplayCard>
            <FlexContainer>
              <div>
                <Flex>
                  <Header>OVER / UNDER 2.5</Header>
                </Flex>
                <Rule />
              </div>
              <Flex>
                <BigCard gtc='65% 35%'>
                  <FirstCard>
                    <h2>65%</h2>
                  </FirstCard>
                  <ThirdCard>
                    <h2>35%</h2>
                  </ThirdCard>
                </BigCard>
              </Flex>
              <Flex>
                <Header>YES</Header>
                <Header>NO </Header>
              </Flex>
            </FlexContainer>
          </DisplayCard>

          {/* Fitfth Card */}
          <DisplayCard>
            <FlexContainer>
              <div>
                <Flex>
                  <Header>OVER / UNDER 3.5</Header>
                </Flex>
                <Rule />
              </div>
              <Flex>
                <BigCard gtc='39% 61%'>
                  <FirstCard>
                    <h2>39%</h2>
                  </FirstCard>
                  <ThirdCard>
                    <h2>61%</h2>
                  </ThirdCard>
                </BigCard>
              </Flex>
              <Flex>
                <Header>YES</Header>
                <Header>NO </Header>
              </Flex>
            </FlexContainer>
          </DisplayCard>
        </CardGrid>

        <LongCard>
          {Array(10)
            .fill("Baddest Guy")
            .map((name: string, i: number) => (
              <List key={i}>
                <p>{name}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi nihil labore non corrupti asperiores quisquam, rerum
                  sunt deleniti et, consequatur aut vitae nostrum magni, optio
                  iusto saepe neque dolore recusandae.
                </p>
              </List>
            ))}
        </LongCard>
      </Container>
    );
  }
}
