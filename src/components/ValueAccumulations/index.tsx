import * as React from "react";
import styled from "../../styles";
import { List, Typography, Button, PageHeader } from "antd";
import ActionButton from "antd/lib/modal/ActionButton";
import Accumulation from "./Accumulation";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const ValueAccumulations = () => {
  return (
    <div>
      <PageHeader
        className='site-page-header'
        title='Title'
        subTitle='This is a subtitle'
      />
      <Accumulation data={data} name="Featured Bets"/>
      <Accumulation data={data} name="Generate Bet"/>
    </div>
  );
};

export default ValueAccumulations;
