import React from "react";
import styled from "styled-components";

const LongCard: React.FC = ({ children }: any) => {
  return <Card>{children}</Card>;
};

export const Card = styled.div``;

export default LongCard;
