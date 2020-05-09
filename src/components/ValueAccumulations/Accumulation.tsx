import * as React from "react";
import { List, Typography, Divider } from "antd";
import ActionButtons from "./ActionButtons";

interface Props {
  data: string[];
  name: string;
}

const Accumulation: React.FC<Props> = ({ data, name }) => {
  return (
    <>
      <Divider orientation="left">{name}</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        size='large'
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
      <ActionButtons />
    </>
  );
};

export default Accumulation;
