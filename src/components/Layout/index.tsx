import * as React from 'react';
import {Button, Row, Col} from 'antd';
import Header from './Header';
import Trending from '../Trending';
import Points from '../Points';

import styled from '../../styles'

const MainContainer = styled(Row)`
  margin-top: 20px;
`;

const Layout: React.SFC = ({children}) => {
  return (
    <div>
      <Row>
        <Header />
      </Row>

      <MainContainer gutter={24}>
        {/* <Col span={5} style={{marginLeft: '20px'}}>
          <Trending />
        </Col> */}

        <Col>
          {children}
        </Col>

        {/* <Col span={6} >
          <Points />
        </Col> */}
      </MainContainer>
    </div>
  );
}

export default Layout;