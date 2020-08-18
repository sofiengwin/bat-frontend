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
