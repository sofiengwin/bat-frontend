import React from "react";
import { Table } from "semantic-ui-react";
import styled from "styled-components";
import EachTips from "./EachTips";
import Charted from "./Chart";

const TipDashboard = () => {
  return (
    <Container>
      <H1>G-Baddest STATS</H1>
      <Charted />
      <Table basic='very'>
        <Table.Header
          style={{ background: "#fafafa", padding: "0.8em !important" }}
        >
          <Table.Row>
            <Table.HeaderCell style={{ padding: "0.8em", color: "#777" }}>
              Number Of Tips
            </Table.HeaderCell>
            <Table.HeaderCell style={{ padding: "0.8em", color: "#777" }}>
              Win
            </Table.HeaderCell>
            <Table.HeaderCell style={{ padding: "0.8em", color: "#777" }}>
              Draw
            </Table.HeaderCell>
            <Table.HeaderCell style={{ padding: "0.8em", color: "#777" }}>
              Lose
            </Table.HeaderCell>
            <Table.HeaderCell style={{ padding: "0.8em", color: "#777" }}>
              Average Odd
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>18</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <EachTips />
    </Container>
  );
};

export default TipDashboard;

export const Container = styled.div`
  margin-bottom: 2em;
`;
const H1 = styled.h1`
  font-size: 2em;
`;
