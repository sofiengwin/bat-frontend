import * as React from 'react';
import styled from '../../styles'

const SmallText = styled.div`
  font-size: 12px;
  color: gray;
`;

export interface ITrend {
  league: string;
  country: string;
  match: string;
  numOfTips: string;
}

const Trend: React.FC<ITrend> = ({country, league, match, numOfTips}) => {
  return (
    <div>
      <SmallText>
        {country} - {league}
      </SmallText>
      <div style={{color: 'black'}}>
        #{match}
      </div>
      <SmallText>
        {numOfTips} Tips
      </SmallText>
    </div>
  );
}

export default Trend;