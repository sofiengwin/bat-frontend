
import React, { useEffect } from 'react';
import { Button, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ITip } from '../PostTip/data';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const columns: ColumnsType<ITip> = [
  {
    title: 'Match',
    dataIndex: 'match',
    key: 'match',
    render: (_, {awayTeamName, homeTeamName}) => {
      return (
        <>
          <p>{homeTeamName}</p>
          <p>vs</p>
          <p>{awayTeamName}</p>
        </>
      );
    },
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'League',
    key: 'league',
    dataIndex: 'league',
  },
  {
    title: 'Bet',
    key: 'bet',
    dataIndex: 'bet',
    render: (_, {bet, betCategory}) => {
      return (
        <>
          <p>{betCategory}</p>
          <p>{bet}</p>
        </>
      );
    },
  },
  {
    title: 'Odd',
    key: 'odd',
    dataIndex: 'odd',
  },
  {
    title: 'Outcome',
    key: 'outcome',
    dataIndex: 'outcome',
    render: (_, record) => {
      return (
        <Select
          defaultValue="PENDING"
          style={{ width: 130 }}
          // onChange={handleChange}
          options={[
            { value: 'WIN', label: 'WIN' },
            { value: 'LOSE', label: 'LOSE' },
            { value: 'PENDING', label: 'PENDING' },
            { value: 'VOID', label: 'VOID' },
          ]}
        />
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='primary'>Update</Button>
      </Space>
    ),
  },
];

const App: React.FC = () => {
  const [tips, setTips] = React.useState<ITip[]>([]);
  useEffect(() => {
    async function getTips() {
      try {
        const q = query(collection(db, "tip"));

        const querySnapshot = await getDocs(q);
        console.log({querySnapshot}, querySnapshot.docs.map(doc => doc.data()))

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setTips(querySnapshot.docs.map(doc => doc.data() as ITip))
      } catch (error) {
        console.log({error})
      }
    }
    getTips();
  }, []);
  return (
    <Table columns={columns} dataSource={tips} />
  );
}

export default App;
