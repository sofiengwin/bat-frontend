import * as React from 'react';
import {Tabs} from 'antd';
import Tips from '../Tips'
import TipsAndHistory from '../TipsAndHistory';

class HomePage extends React.Component {
  render() {
    return (
      <TipsAndHistory loadTips={() => console.log('loading more')} />
    );
  }
}

export default HomePage;