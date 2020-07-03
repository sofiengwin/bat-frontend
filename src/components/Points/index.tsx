import * as React from "react";
import { Tabs, Table, Card } from "antd";
const TabPane = Tabs.TabPane;

export default class Points extends React.Component {
  render() {
    return (
      <Card title='User Ranking'>
        <PointsTable />
      </Card>
    );
  }
}

const data = [
  {
    key: 1,
    name: "John Brown",
    point: 32,
  },
  {
    key: 2,
    name: "Jim Green",
    point: 42,
  },
  {
    key: 3,
    name: "Joe Black",
    point: 32,
  },
  {
    key: 9,
    name: "Joe Black",
    point: 32,
  },
  {
    key: 4,
    name: "Joe Black",
    point: 32,
  },
  {
    key: 5,
    name: "Joe Black",
    point: 32,
  },
  {
    key: 6,
    name: "Joe Black",
    point: 32,
  },
  {
    key: 7,
    name: "Joe Black",
    point: 32,
  },
  {
    key: 8,
    name: "Joe Black",
    point: 32,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Points",
    dataIndex: "point",
    key: "point",
  },
];

const PointsTable = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
