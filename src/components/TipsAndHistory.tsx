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
      <Tabs size='large' onTabClick={loadTips} type={'card'}>
        <Tabs.TabPane tab="Up Coming" key="1">
          <Tips/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="History" key="2">
          <Tips />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default TipsAndHistory;