import * as React from 'react';
import { Tabs } from 'antd';
import ListAccumulations from './ListAccumulations';

const ValueAccumulations = () => {
  return (
    <Tabs size='large' onTabClick={() => null} type={'card'}>
      <Tabs.TabPane tab="Up Coming" key="1">
        <ListAccumulations/>
      </Tabs.TabPane>

      <Tabs.TabPane tab="History" key="2">
        <ListAccumulations />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default ValueAccumulations;