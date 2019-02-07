import * as React from 'react';
import {Card, Statistic, Icon} from 'antd';

import styled from '../../../styles';

const Flex = styled.div`
  display: flex;
`

export default () => {
  return (
    <Flex style={{padding: '30px', justifyContent: 'space-between'}}>
      {Array(4).fill(0).map((_, index) => {
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
    </Flex>
  );
}