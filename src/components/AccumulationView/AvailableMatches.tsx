import * as React from "react";
import { List, Button } from "antd";
import Item from './Item';
import SelectInput from '../ui/SelectInput';
import styled from '../../styles';
import {PlusCircleTwoTone} from '@ant-design/icons'
import CustomList from '../CustomList';
import { ITip } from "../../models/Tip";
import FilterTips, {IFilterTipsFunctions} from './FilterTips';

const Filter = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  grid-gap: 10px;
  margin: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) {
    grid-template-columns: 0.9fr;
    grid-gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

interface Props {
  tips: any[];
  addToAccumulation: (tips: ITip[]) => void;
  currentTips: string[];
  filterTips: IFilterTipsFunctions;
  loading: boolean;
}

const AvailableMatches: React.FC<Props> = ({ tips, addToAccumulation, currentTips, filterTips, loading }) => {
  const [selectedId, setSelected] = React.useState<number>(0);
  const [selectedMatches, setSelectedMatches] = React.useState([]);
  console.log({tips})

  const onSelect = (e: any) => {
    if (e.target.checked) {
      const match = tips.find((m) => m.id === e.target.value)
      setSelectedMatches(selectedMatches.concat(match))
    } else {
      const arr = selectedMatches.filter((m: any) => m.id !== e.target.value);
      setSelectedMatches(arr);
    }
  }

  return (
    <>
      <FilterTips filterTips={filterTips} loading={loading} currentTips={currentTips}/>
      <CustomList tips={tips} loading={loading}>
        {(leagueTips) => (
          <Item
            leagueTips={leagueTips}
            selectedId={selectedId}
            setSelected={setSelected}
            onSelect={onSelect}
            render={(tip) => (
              <PlusCircleTwoTone onClick={() => addToAccumulation([tip])} />
            )}
          />
        )}
      </CustomList>
      <ButtonWrapper>
        <Button type="primary" onClick={() => addToAccumulation(selectedMatches)}>Add Selected</Button>
      </ButtonWrapper>
    </>
  );
};

export default AvailableMatches;