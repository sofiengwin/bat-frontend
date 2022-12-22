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
  event_date: string;
  homeTeam: {
    team_name: string;
    logo: string;
  };
  awayTeam: {
    team_name: string;
    logo: string;
  };
}

const Fixtures = () => {
  const [matches, setMatches] = useState<Partial<RapidActionMatch>[]>([]);
  console.log({matches})
  useEffect(() => {
    rapidApiClient('/fixtures/league/524/last/10')
      .then(({fixtures}) => {
        console.log({fixtures})
        setMatches(fixtures);
      });

  }, []);

  return (
    <Flex style={{flexDirection: 'column'}}>
      {matches.map((match: any, index: number) => {
        console.log({match})
        return <StyledCard key={index}>
          <Flex style={{flexDirection: 'column'}}>
              <Sub><Logo><img src={match.homeTeam.logo} alt='logo'/></Logo> <p>{match.homeTeam.team_name} vs {match.awayTeam.team_name}</p> <Logo><img src={match.awayTeam.logo} alt='logo' /></Logo></Sub>
              <StyledSpan>{match.event_date}</StyledSpan>
          </Flex>
        </StyledCard>
      })}
    </Flex>
  );
}

export default Fixtures;