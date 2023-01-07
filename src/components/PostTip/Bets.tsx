import * as React from "react";
import { Card, List, Space, Divider } from "antd";
import { Link } from "react-router-dom";
import {rapidApiClient} from '../../lib/client';

import {IHandleStageSelect} from './data';

import styled from "../../styles";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightblue;
  padding: 5px 10px;
  margin-bottom: -12px;
`;

const StyledList = styled(List)`
  background: black;
  .ant-space-item {
    width: 100%;
  }
`;

const StyledCard = styled(Card)`
  margin: 0.4em 0;
  border-bottom: 1px solid #e6ecf0;
  background-color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #e6ecf0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }
`;

const BETS = [
  "Home Win",
  "Draw",
  "Away Win",
  "Something",
  "Something",
  "Something",
];

interface Props {
  // handleStageSelect: IHandleStageSelect;
  fixtureId?: number;
}

const Bets = ({fixtureId}: Props) => {
  console.log({fixtureId})
  const [bets, setBets] = React.useState([])
  React.useEffect(() => {
    rapidApiClient(`/odds?bookmaker=1&fixture=${fixtureId}`)
      .then((result) => {
        const [bmkResult] = result;
        const {bookmakers} = bmkResult;
        const [bmkDetails] = bookmakers;
        const {bets = []} = bmkDetails
        console.log({result, bookmakers, bmkResult, bmkDetails, bets})
        setBets(bets)
      });
  }, [fixtureId])

  return (
    <Flex style={{ flexDirection: "column" }}>
      {bets.map((bet: any, index: number) => {
        console.log({bet})
        return (
          // <Space key={index} style={{background: 'red'}}>
              <StyledList
                header={<StyledHeader>{bet.name}</StyledHeader>}
                dataSource={bet.values}
                renderItem={(b: any) => (
                  <Flex key={`${bet.id}-${bet.name}`}>
                    <div style={{flex: '1 1 30%'}}>
                      <List.Item >
                        <Space direction="vertical" style={{background: 'blue'}} >
                          <p>{b.value}</p>
                          <p>{b.odd}</p>
                        </Space>
                      </List.Item>
                    </div>
                  </Flex>
                )}
              />
          // </Space>
        );
      })}
    </Flex>
  );
}

export default Bets;
