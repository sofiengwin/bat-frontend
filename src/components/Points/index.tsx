import * as React from "react";
import { Table, Card } from "antd";
import { gql, useQuery } from "@apollo/client";

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
  const points = data ? data.fetchRanking.map((point: any, index: any) => ({key: index + 1, ...point})) : [];
  return <Table columns={columns} dataSource={points} pagination={false} loading={loading}/>;
};
