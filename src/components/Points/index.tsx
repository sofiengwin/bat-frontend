import * as React from "react";
import { Tabs, Table, Card } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { fetchRankingQuery, Response } from "../../data/graphql/fetchRanking";

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
  const {loading, data} = useQuery<Response, {}>(gql(fetchRankingQuery));
  const points = data ? data.fetchRanking.map((point, index) => ({key: index + 1, ...point})) : [];
  return <Table columns={columns} dataSource={points} pagination={false} loading={loading}/>;
};
