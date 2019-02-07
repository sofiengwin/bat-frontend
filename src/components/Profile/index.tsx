import * as React from 'react';
import {Row, Tabs} from 'antd';

import styled from '../../styles'
import ProfileAnalytics from './ProfileAnalytics';
import Streak from './Streak';
import Tips from '../Tips';

const Flex = styled.div`
  display: flex;
`

class Profile extends React.Component {
  render() {
    return (
      <>
        <Row style={{marginBottom: '20px'}}>
          <Flex style={{flexDirection: 'column'}}>
            <ProfileAnalytics />
            <Streak />
          </Flex>
        </Row>

        <Row style={{marginBottom: '20px'}}>
        <Tabs size='large'>
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
        </Row>
      </>
    );
  }
}

export default Profile;