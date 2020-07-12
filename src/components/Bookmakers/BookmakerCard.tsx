import * as React from 'react';
import { Card, Button} from 'antd';
import styled from '../../styles';
import { useMediaQuery } from 'react-responsive';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 10px;
  }
`;

const BookmakerCard = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const cardWidth = isDesktopOrLaptop ? 300 : '100%';
  return (
    <StyledCard
      style={{width: cardWidth, margin: 10}}
      cover={
        <img
          alt="Offer"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
     <Content>
        <H2>Hello World Offer</H2>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </P>
        <Button type="primary">Visit</Button>
     </Content>
    </StyledCard>
  );
}

export default BookmakerCard

const Content = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    justify-self: flex-end;
  }
`;
const H2 = styled.h2`
  padding-bottom: 0;
`;

const P = styled.p`
  padding-bottom: 0.7em;
`;
