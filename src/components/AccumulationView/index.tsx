import * as React from "react";
import Accumulation from "./Accumulation";
import AvailableGames from './AvailableMatches';
import { Divider } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const AccumulationView = () => {
  return (
    <div>
      <Accumulation data={data}/>
      <Divider orientation="left" >Other Great Games</Divider>
      <AvailableGames data={data}/>
    </div>
  );
};

export default AccumulationView;