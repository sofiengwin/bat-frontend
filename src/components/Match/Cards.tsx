import React from "react";
import { Card } from "./style";

const DisplayCard: React.FC = ({ children }: any) => {
  return <Card>{children}</Card>;
};

export default DisplayCard;
