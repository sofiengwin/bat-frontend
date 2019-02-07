import * as React from 'react';
import {Tabs} from 'antd';
import Tips from './Tips'

interface Props {
  loadTips: () => void;
}

class TipsAndHistory extends React.Component<Props> { 
  render() {
    const {loadTips} = this.props;
    return (
      <Tabs size='large' onTabClick={loadTips}>
        <Tabs.TabPane tab="Tab 1" key="1">
          <Tips/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Tab 2" key="2">
          <Tips />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          <Tips />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default TipsAndHistory;