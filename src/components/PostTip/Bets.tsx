import * as React from "react";
import { Card, List } from "antd";
import { Collapse } from "antd";

import { rapidApiClient } from "../../lib/client";

import styled from "../../styles";

const { Panel } = Collapse;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  .bet-values {
    background: #f1f1f7;
    width: 100%;
    padding: 5px 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    p {
      margin: 0;
      padding: 0;
    }
  }
`;

interface Props {
  // handleStageSelect: IHandleStageSelect;
  fixtureId?: number;
}

const Bets = ({ fixtureId }: Props) => {
  const [bets, setBets] = React.useState([]);
  React.useEffect(() => {
    rapidApiClient(`/odds?bookmaker=1&fixture=${fixtureId}`).then((result) => {
      const [bmkResult] = result;
      const { bookmakers } = bmkResult;
      const [bmkDetails] = bookmakers;
      const { bets = [] } = bmkDetails;
      console.log({ result, bookmakers, bmkResult, bmkDetails, bets });
      setBets(bets);
    });
  }, [fixtureId]);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      {bets?.map((bet: any) => (
        <Panel header={bet?.name} key={bet?.id.toString()}>
          <Flex>
            {bet?.values?.map((value: any) => (
              <div className="bet-values">
                <p>{value?.value}</p>
                <p>{value?.odd}</p>
              </div>
            ))}
          </Flex>
        </Panel>
      ))}
    </Collapse>
  );
};

export default Bets;
