import * as React from "react";
import { List } from "antd";
import ActionButtons from "./ActionButtons";
import ActionInputs from "./ActionInputs";
import Item from './Item';

interface Props {
  data: string[];
}

const Accumulation: React.FC<Props> = ({ data }) => {
  return (
    <>
      <List
        header={<h3>Value Bets By @user</h3>}
        footer={<ActionInputs />}
        bordered
        size='large'
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Item action={() => null} actionName="Remove" />
          </List.Item>
        )}
      />
      <ActionButtons />
    </>
  );
};

export default Accumulation;
