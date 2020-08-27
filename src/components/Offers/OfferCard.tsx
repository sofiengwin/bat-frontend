import * as React from 'react';
import { Card, Button} from 'antd';
import styled from '../../styles';
import { IOffer } from '../../models/Offer';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 10px;
  }
`;

const OfferCard: React.FC<IOffer> = ({title, link, description, imageUrl}) => {
  return (
    <StyledCard
      style={{margin: 10}}
      cover={
        <img
          alt="Offer"
          src={imageUrl}
        />
      }
    >
     <Content>
        <H2>{title}</H2>
        <P>{description}</P>
        <Button type="danger" href={link}>Claim Offer</Button>
     </Content>
    </StyledCard>
  );
}

export default OfferCard

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    justify-self: flex-end;
  }
`;
export const H2 = styled.h2`
  padding-bottom: 0;
`;
export const P = styled.p`
  padding-bottom: 0.7em;
`;
