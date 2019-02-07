import * as React from 'react';
import {List} from 'antd'
import {Link} from 'react-router-dom';
import styled from '../../styles'

const PostHeading = styled.h5`
  margin: 0;
`;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class User extends React.Component {
  render() {
    return (
        <List
          header={<PostHeading>Trending</PostHeading>}
          bordered
          dataSource={data}
          renderItem={(item: string) => (<List.Item><Link to={`/bets/${item}`}>{item}</Link></List.Item>)}
        />
    );
  }
}