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
import DisplayCard from "./Cards";
import LongCard from "./Longcards";
import OneWayComparison from "./OneWayComparison";
import TwoWayComparison from "./TwoWayComparison";
import MatchThough from "./MatchThough";

export default class Match extends React.Component {
  render() {
    return (
      <Container>
        <CardGrid>
          {/* Home draw away */}
          <OneWayComparison />

          {/* Double chance*/}
          <TwoWayComparison title='DOUBLE CHANCE' gtc='70% 30%' />

          {/*  BTS */}
          <TwoWayComparison title='BOTH TEAMS TO SCORE' gtc='44% 56%' />

          {/* Over/under 1.5 */}
          <TwoWayComparison title='OVER / UNDER 1.5' gtc='25% 75%' />

          {/* Over/under 2.5 */}
          <TwoWayComparison title='OVER / UNDER 2.5' gtc='65% 35%' />

          {/* Over/under 3.5 */}
          <TwoWayComparison title='OVER / UNDER 3.5' gtc='40% 60%' />
        </CardGrid>

        <LongCard>
          {Array(10)
            .fill("Baddest Guy")
            .map((name: string, i: number) => (
              <MatchThough key={i} name={name} />
            ))}
        </LongCard>
      </Container>
    );
  }
}
