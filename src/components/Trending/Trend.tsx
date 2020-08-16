import * as React from 'react';
import styled from '../../styles'
// import 

const SmallText = styled.div`
  font-size: 12px;
  color: gray;
`;

export interface ITrend {
  league: string;
  country: string;
  homeTeamName: string;
  awayTeamName: string;
  tipCount: number;
}

const Trend: React.FC<ITrend> = ({country, league, homeTeamName, awayTeamName, tipCount}) => {
  return (
    <div>
      <SmallText>
        {country} - {league}
      </SmallText>
      <div style={{color: 'black'}}>
        #{homeTeamName} vs {awayTeamName}
      </div>
      <SmallText>
        {tipCount} Tips
      </SmallText>
    </div>
  );
}

export default Trend;