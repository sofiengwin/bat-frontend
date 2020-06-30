import * as React from 'react';
import {Card, Statistic, Icon} from 'antd'

import styled from '../../../styles';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export default () => {
  return (
    <Grid>
      {Array(3).fill(0).map((_, index) => {
        return <Card key={index}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      })}
    </Grid>
  );
}