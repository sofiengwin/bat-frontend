import * as React from "react";
import { Tooltip } from "antd";

import styled from "../../../styles";

import SingleResult from "../../Trending/ui/SingleResult";

const Flex = styled.div`
  display: flex;
`;

export default () => {
  return (
    <Flex>
      {Array(10)
        .fill(0)
        .map((_, index) => {
          return (
            <Tooltip
              placement='topLeft'
              title='Prompt Text'
              arrowPointAtCenter
              key={index}
            >
              <SingleResult key={index}>W</SingleResult>
            </Tooltip>
          );
        })}
    </Flex>
  );
};
