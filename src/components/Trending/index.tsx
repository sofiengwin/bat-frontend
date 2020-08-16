import * as React from "react";
import Trends from "./Trends";
import { useQuery } from "@apollo/react-hooks";
import { fetchTrendingQuery, Response } from "../../data/graphql/fetchTrending";
import { gql } from "apollo-boost";
import {ITrend} from '../../models/Trend';


const Trending = () => {
  const {loading, data} = useQuery<Response, {}>(gql(fetchTrendingQuery));
  const trends: ITrend[] = data ? data.fetchTrending : [];
  return (
    <>
      <Trends trends={trends} loading={loading} />
    </>
  );
}

export default Trending;
