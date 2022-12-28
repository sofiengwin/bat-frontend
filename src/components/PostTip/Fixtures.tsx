import * as React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import styled from '../../styles'
import { useEffect, useState } from 'react';
import {rapidApiClient} from '../../lib/client';

const Flex = styled.div`
  display: flex;
`;
const Logo = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 1em;
  margin-right: 1em;
  overflow: hidden;
  img{
    width: 100%;
  }
  p{
    line-height: 100%;
  }
`;

const Sub = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`

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

interface RapidActionMatch {
  eventDate: string;
  homeTeam: {
    teamName: string;
    logo: string;
  };
  awayTeam: {
    teamName: string;
    logo: string;
  };
}

const transformFixtures: (raf: any[]) => RapidActionMatch[] = (rapidActionFixtures: any[]) => {
  return rapidActionFixtures.map((rapidActionFixture) => {
    const {teams, fixture} = rapidActionFixture;

    return {
      eventDate: fixture.date,
      homeTeam: {
        teamName: teams.home.name,
        logo: teams.home.logo
      },
      awayTeam: {
        teamName: teams.away.name,
        logo: teams.away.logo
      },
    }
  })
}

const Fixtures = () => {
  const [matches, setMatches] = useState<RapidActionMatch[]>([]);
  console.log({matches})
  useEffect(() => {
    rapidApiClient('/fixtures?date=2022-12-26&league=39&next=10')
      .then((fixtures) => {
        console.log({fixtures}, transformFixtures(fixtures))
        setMatches(transformFixtures(fixtures));
      });

  }, []);

  return (
    <Flex style={{flexDirection: 'column'}}>
      {matches.map((match: RapidActionMatch, index: number) => {
        return <StyledCard key={index}>
          <Flex style={{flexDirection: 'column'}}>
            <Sub><Logo><img src={match.homeTeam.logo} alt='logo'/></Logo> <p>{match.homeTeam.teamName} vs {match.awayTeam.teamName}</p> <Logo><img src={match.awayTeam.logo} alt='logo' /></Logo></Sub>
            <StyledSpan>{match.eventDate}</StyledSpan>
          </Flex>
        </StyledCard>
      })}
    </Flex>
  );
}

export default Fixtures;