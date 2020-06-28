import * as React from "react";
import { List, Button } from "antd";
import Item from './Item';
import SelectInput from '../ui/SelectInput';
import styled from '../../styles';
import {PlusCircleTwoTone} from '@ant-design/icons'

const Filter = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  margin: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

interface Props {
  data: any[];
  addToAccumulation: (match: any) => void;
}

const AvailableMatches: React.FC<Props> = ({ data, addToAccumulation }) => {
  const [selectedId, setSelected] = React.useState<number>(0);
  const [selectedMatches, setSelectedMatches] = React.useState([])

  const onSelect = (e: any) => {
    console.log({e})
    if (e.target.checked) {
      const match = data.find((m) => m.id === e.target.value)
      setSelectedMatches(selectedMatches.concat(match))
    } else {
      const arr = selectedMatches.filter((m: any) => m.id !== e.target.value);
      setSelectedMatches(arr);
    }
  }

  return (
    <>
      <Filter>
        <SelectInput options={['David', 'James', 'Charles', 'Peralta', 'Morty']} onChange={() => null} />
        <SelectInput options={['David', 'James', 'Charles', 'Peralta', 'Morty']} onChange={() => null} />
        <SelectInput options={['David', 'James', 'Charles', 'Peralta', 'Morty']} onChange={() => null} />
        <Button type="primary">Filter</Button>
      </Filter>
      <List
        bordered
        size='large'
        dataSource={data}
        renderItem={(match) => (
          <List.Item>
            <Item
              action={() => null}
              actionName="Add"
              match={match}
              selectedId={selectedId}
              setSelected={setSelected}
              onSelect={onSelect}
              render={() => (
                <PlusCircleTwoTone onClick={() => addToAccumulation([match])}/>
              )}
            />
          </List.Item>
        )}
      />
      <ButtonWrapper>
        <Button type="primary" onClick={() => addToAccumulation(selectedMatches)}>Add Selected</Button>
      </ButtonWrapper>
    </>
  );
};

export default AvailableMatches;