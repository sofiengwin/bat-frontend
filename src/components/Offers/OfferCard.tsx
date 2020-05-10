import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const OfferCard = () => {
  return (
    <Grid>
      <Image>
        <img src='./images/blackbet.jpg' alt='blackbet' />
      </Image>
      <Content>
        <H2>Black Bets</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste
          cum sed culpa consequuntur repudiandae optio impedit eius facilis
          dicta obcaecati, quae, numquam aliquam sunt atque nemo officia ullam
          quaerat?
        </P>
        <Button type='primary'>Claim Prize</Button>
      </Content>
    </Grid>
  );
};

export default OfferCard;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 250px;
  width: 100%;
  box-shadow: 0 2px 10px #dddddd;
  border-radius: 0.5em;
  margin-bottom: 0.8em;
  overflow: hidden;
`;
export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Content = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    justify-self: flex-end;
  }
`;
export const H2 = styled.h2`
  padding-bottom: 1em;
`;
export const P = styled.p`
  padding-bottom: 0.7em;
`;
