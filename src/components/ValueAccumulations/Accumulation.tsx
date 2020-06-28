import * as React from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import { List } from "antd";


interface Props {
  data: string[];
}

const Accumulation: React.FC<Props> = ({ data }) => {
  return (
    <>
      <List
        header={<h3><Link to="value-accumulators/value-by-user">Value Bets By @user</Link> </h3>}
        bordered
        size='large'
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Item action={() => null} actionName="Remove"/>
          </List.Item>
        )}
      />
    </>
  );
};

export default Accumulation;
