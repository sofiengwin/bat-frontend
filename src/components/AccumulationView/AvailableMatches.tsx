import * as React from "react";
import { List, Button } from "antd";
import ActionButtons from "./ActionButtons";
import Item from './Item';
import SelectInput from '../ui/SelectInput';
import styled from '../../styles';

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
  data: string[];
}

const AvailableMatches: React.FC<Props> = ({ data }) => {
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
        renderItem={(item) => (
          <List.Item>
            <Item action={() => null} actionName="Add"/>
          </List.Item>
        )}
      />
      <ButtonWrapper>
        <Button type="primary">Add Selected</Button>
      </ButtonWrapper>
    </>
  );
};

export default AvailableMatches;