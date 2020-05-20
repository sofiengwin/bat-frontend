import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";

const index = () => {
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

export default index;

export const Flex = styled.div``;
