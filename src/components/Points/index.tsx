import * as React from 'react';
import {Tabs, Table, Card} from 'antd'
const TabPane = Tabs.TabPane;

export default class Points extends React.Component {
  render() {
    return (
      <Card title='User Ranking'>
        <Tabs size='large'>
          <TabPane tab="Tab 1" key="1">
            <PointsTable />
          </TabPane>

          <TabPane tab="Tab 2" key="2">
            <PointsTable />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <PointsTable />
          </TabPane>
        </Tabs>
      </Card>
    )
  }
}

const data = [{
  key: '1',
  name: 'John Brown',
  point: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  point: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  point: 32,
  address: 'Sidney No. 1 Lake Park',
}];

const columns = [{
  title: '#',
  dataIndex: 'key',
  key: 'key',
  render: (text: any) => <a href="javascript:;">{text}</a>,
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Points',
  dataIndex: 'point',
  key: 'point',
}
];

const PointsTable = () => {
  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  );
}