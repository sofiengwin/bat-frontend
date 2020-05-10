import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <Flex>
      {Array(10)
        .fill("fill")
        .map((fill: string) => (
          <OfferCard />
        ))}
    </Flex>
  );
};

export default Offers;

export const Flex = styled.div``;
