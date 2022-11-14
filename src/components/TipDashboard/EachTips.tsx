import React from "react";
import { Container } from "./TipDashboard";

const EachTips = () => (
  <Container>
    <h1>G-Baddest Daily pick</h1>
    {/* <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Day</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Match</Table.HeaderCell>
          <Table.HeaderCell>League</Table.HeaderCell>
          <Table.HeaderCell>Tip</Table.HeaderCell>
          <Table.HeaderCell>Odd</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {predictions.map((predict: any) => (
          <Table.Row>
            <Table.Cell>{predict.day}</Table.Cell>
            <Table.Cell>{predict.time}</Table.Cell>
            <Table.Cell>{predict.match}</Table.Cell>
            <Table.Cell>{predict.league}</Table.Cell>
            <Table.Cell>{predict.tip}</Table.Cell>
            <Table.Cell>{predict.odd}</Table.Cell>
            <Table.Cell>{predict.score}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table> */}
  </Container>
);

export default EachTips;
