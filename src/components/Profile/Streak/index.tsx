import * as React from "react";
import { Tooltip } from "antd";

import styled from "../../../styles";
import SingleResult from "../../Trending/ui/SingleResult";

const NUM_OF_STREAK_ROW = 15;
// const STREAK_PADDING = 3;
// const STREAK_MARGIN = 2;

const Flex = styled.div`
  display: flex;
`;

interface State {
  width: string;
}

class Streak extends React.Component<{}, State> {
  element: HTMLDivElement | null = null;
  state: State = { width: "20px" };

  componentDidMount() {
    console.log(this.element);
    // const space = STREAK_MARGIN;
    if (this.element) {
      this.setState({
        width: `${(this.element.clientWidth - 4 * NUM_OF_STREAK_ROW) /
          NUM_OF_STREAK_ROW}px`,
      });
    }
  }

  render() {
    return (
      <Flex
        style={{ flexWrap: "wrap", justifyContent: "space-between" }}
        ref={(ref) => (this.element = ref)}
      >
        {Array(45)
          .fill(0)
          .map((_, index) => {
            return (
              <Tooltip
                placement='topLeft'
                title='Prompt Text'
                arrowPointAtCenter
                key={index}
              >
                <SingleResult style={{ width: this.state.width }}>
                  W
                </SingleResult>
              </Tooltip>
            );
          })}
      </Flex>
    );
  }
}

export default Streak;
