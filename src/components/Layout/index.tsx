import * as React from 'react';
import {Row, Col} from 'antd';
import Header from './Header';
// import Trending from '../Trending';
// import Points from '../Points';

import styled from '../../styles'
// import { useMediaQuery } from 'react-responsive';

const MainContainer = styled(Row)`
  margin-top: 20px;
  justify-content: center;
  width: 100%;
`;

const Layout: React.FC<{children?: React.ReactNode}> = ({children}) => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })
  // const mainColSpan = isDesktopOrLaptop ? 12 : undefined;
  return (
    <div>
      <Row>
        <Header />
      </Row>

      <MainContainer gutter={24}>
        {/* {isDesktopOrLaptop && <Col span={5} style={{marginLeft: '20px'}}>
          <Trending />
        </Col>} */}

        <Col>
          {children}
        </Col>

        {/* {isDesktopOrLaptop && <Col span={6} >
          <Points />
        </Col>} */}
      </MainContainer>
    </div>
  );
}

export default Layout;
