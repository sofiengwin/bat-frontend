import React from "react";
import { Card } from "./style";

const DisplayCard: React.SFC = ({ children }: any) => {
  return <Card>{children}</Card>;
};

export default DisplayCard;
