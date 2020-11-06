import * as React from 'react';
import {ITrend} from '../../models/Trend';
import styled from "../../styles";
import { List } from 'antd';
import { Link } from 'react-router-dom';
import Trend from './Trend';

const PostHeading = styled.h3`
  margin: 0;
`;


interface Props {
  trends: ITrend[];
  loading: boolean;
}

const Trends: React.FC<Props> = ({trends, loading}) => {
  return (
    <List
      header={<PostHeading>Trending</PostHeading>}
      bordered
      dataSource={trends}
      loading={loading}
      renderItem={(item: ITrend) => (
        <List.Item>
          <Link to={`/matches/${item.matchId}`}>
            <Trend {...item} />
          </Link>
        </List.Item>
      )}
    />
  );
};

export default Trends;