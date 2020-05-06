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
            {/* <ProfileAnalytics /> */}
            <Streak />
          </Flex>
        </Row>

        <Row style={{marginBottom: '20px'}}>
        <Tabs size='large' type="card">
            <Tabs.TabPane tab="Upcoming " key="1">
              <Tips/>
            </Tabs.TabPane>

            <Tabs.TabPane tab="History" key="2">
              <Tips />
            </Tabs.TabPane>
          </Tabs>
        </Row>
      </>
    );
  }
}

export default Profile;