import * as React from 'react';
import {List} from 'antd'
import {Link} from 'react-router-dom';
import styled from '../../styles'
import Trend, {ITrend} from './Trend';

const PostHeading = styled.h5`
  margin: 0;
`;

const D = {
  league: 'Premier League',
  country: 'England',
  match: 'Man Utd vs Man City',
  numOfTips: '25k',
};

const data = Array(10).fill(D)
console.log({data})
export default class User extends React.Component {
  render() {
    return (
        <List
          header={<PostHeading>Trending</PostHeading>}
          bordered
          dataSource={data}
          renderItem={(item: ITrend) => (<List.Item><Link to={`/bets/${item.match}`}><Trend {...item} /></Link></List.Item>)}
        />
    );
  }
}