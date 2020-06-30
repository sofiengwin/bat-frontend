import * as React from 'react';
import {Row} from 'antd';
import ProfileAnalytics from './ProfileAnalytics';
import ValueAccumulations from '../ValueAccumulations'

class Profile extends React.Component {
  render() {
    return (
      <>
        <Row style={{marginBottom: '20px'}}>
          <ProfileAnalytics />
        </Row>

        <Row style={{marginBottom: '20px'}}>
          <ValueAccumulations />
        </Row>
      </>
    );
  }
}

export default Profile;