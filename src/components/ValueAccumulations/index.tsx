import * as React from 'react';
import { Tabs } from 'antd';
import ListAccumulations from './ListAccumulations';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {Response, fetValueAccumulationsQuery} from '../../data/graphql/fetchValueAccumulations';
import { IAccumulation } from '../../models/Accumulation';

const ValueAccumulations = () => {
  const {loading, data, error} = useQuery<Response, {}>(gql(fetValueAccumulationsQuery), {});
  console.log({loading, error, data})
  const accumulations: IAccumulation[] = data ? data.fetchValueAccumulations : [];
  return (
    <Tabs size='large' onTabClick={() => null} type={'card'}>
      <Tabs.TabPane tab="Up Coming" key="1">
        <ListAccumulations accumulations={data ? data.fetchValueAccumulations : []}/>
      </Tabs.TabPane>

      <Tabs.TabPane tab="History" key="2">
        <ListAccumulations accumulations={accumulations} />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default ValueAccumulations;