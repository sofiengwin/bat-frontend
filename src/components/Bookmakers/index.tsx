import React from "react";
import styled from "styled-components";
import BookmakerCard from "./BookmakerCard";

const index = () => {
  return (
    <Flex>
      {Array(10)
        .fill("fill")
        .map((fill: string) => (
          <BookmakerCard />
        ))}
    </Flex>
  );
};

export default index;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
`;