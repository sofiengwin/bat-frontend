import React from "react";
import { Table } from "semantic-ui-react";
import { Container } from "./TipDashboard";

const predictions = [
  {
    day: 1,
    time: "12:00",
    match: "Manchester United vs Arsenal",
    league: "Premier League",
    tip: 1,
    odd: 1.5,
    score: "3 - 0",
  },
  {
    day: 2,
    time: "12:00",
    match: "Manchester City vs Chelsea",
    league: "Premier League",
    tip: 1,
    odd: 1.5,
    score: "1 - 2",
  },
  {
    day: 3,
    time: "12:00",
    match: "Liverpool vs Everton",
    league: "Premier League",
    tip: 1,
    odd: 1.5,
    score: "2 - 0",
  },
  {
    day: 4,
    time: "12:00",
    match: "Watford vs Hotspur",
    league: "Premier League",
    tip: 1,
    odd: 1.5,
    score: "2 - 4",
  },
  {
    day: 5,
    time: "12:00",
    match: "Wolve vs Coventry",
    league: "Premier League",
    tip: 1,
    odd: 1.5,
    score: "3 - 0",
  },
];

const EachTips = () => (
  <Container>
    <h1>G-Baddest Daily pick</h1>
    <Table striped>
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
    </Table>
  </Container>
);

export default EachTips;
