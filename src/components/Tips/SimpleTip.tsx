
import React, { useEffect } from 'react';
import { Button, Popconfirm, Select, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ITip } from '../PostTip/data';
import { collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAppContext } from "../App";


const App: React.FC = () => {
  const [tips, setTips] = React.useState<ITip[]>([]);
  const [selectedTip, setSelectedTip] = React.useState<ITip | null>(null);
  const [loading, setLoading] = React.useState(false);
  const {setAppLoading} = useAppContext();
  async function getTips() {
    try {
      setLoading(true)
      const q = query(collection(db, "tip"));

      const querySnapshot = await getDocs(q);

      setTips(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}) as ITip))
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log({error})
    }
  }
  useEffect(() => {
    getTips();
  }, []);

  const updateTip = async () => {
    if (selectedTip) {
      setAppLoading(true)
      const updateDocRef = doc(db, "tip", selectedTip.id);
      await updateDoc(updateDocRef, {
         outcome: selectedTip.outcome
      });
      setAppLoading(false)
      setSelectedTip(null)
      getTips();
    }
  }

  const deleteTip = (id: string) => {
    return async () => {
      await deleteDoc(doc(db, "tip", id));
      getTips()
    }
  }

  const columns: ColumnsType<ITip> = [
    {
      title: 'Match',
      dataIndex: 'match',
      key: 'match',
      render: (_, {awayTeamName, homeTeamName}) => {
        return (
          <>
            <p>{homeTeamName} vs {awayTeamName}</p>
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
            <p>{betCategory}: <strong>{bet}</strong></p>
            <p></p>
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
        console.log({record})
        return (
          <Space>
            <Select
              style={{ width: 130 }}
              value={selectedTip?.id === record.id ? selectedTip?.outcome : record.outcome}
              onChange={(value) => {
                console.log(value);
                setSelectedTip({...record, outcome: value});
              }}
              options={[
                { value: 'WIN', label: 'WIN' },
                { value: 'LOSE', label: 'LOSE' },
                { value: 'PENDING', label: 'PENDING' },
                { value: 'VOID', label: 'VOID' },
              ]}
            />

            <Button
              type='primary'
              disabled={selectedTip?.id !== record.id}
              onClick={updateTip}
            >
              Update
            </Button>
            <Popconfirm
              placement="topLeft"
              title={'Are you sure to delete this tip?'}
              description={'Delete the tip'}
              onConfirm={deleteTip(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type='primary'
                danger
              >
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <Table columns={columns} dataSource={tips} loading={loading}/>
  );
}

export default App;
