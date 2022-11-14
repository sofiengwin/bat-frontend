import * as React from 'react';
import {Card, Statistic} from 'antd'

import styled from '../../../styles';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export interface ProfileAnalyticsProps {
  totalTips: number;
  totalWins: number;
  totalPoints: number;
}

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({totalTips, totalWins, totalPoints}) => {
  return (
    <Grid>
      <Card>
        <Statistic
          title="Total Tips"
          value={totalTips}
          valueStyle={{ color: '#3f8600' }}
          // prefix= type="arrow-up" />}
        />
      </Card>
      <Card>
        <Statistic
          title="Total Wins"
          value={totalWins}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          // prefix= type="arrow-up" />}
        />
      </Card>
      <Card>
        <Statistic
          title="Total Points"
          value={totalPoints}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          // prefix={<Icon type="arrow-up" />}
        />
      </Card>
    </Grid>
  );
}

export default ProfileAnalytics;