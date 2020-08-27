import * as React from "react";
import Accumulation from "./Accumulation";
import AvailableGames from './AvailableMatches';
import { Divider } from "antd";
import { IAccumulation } from "../../models/Accumulation";
import { ITip } from "../../models/Tip";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { fetchTipQuery, Response as FilterResponse,  FilterOptions} from '../../data/graphql/fetchTips';

interface Props {
  accumulation: IAccumulation;
  availableTips: ITip[];
  loading?: boolean;
}

const View: React.FC<Props> = (props) => {
  const [accumulation, setAccumulations] = React.useState<IAccumulation>(props.accumulation);
  const [availableTips, setAvailableTips] = React.useState<ITip[]>(props.availableTips);
  const currentlySelectedTips = accumulation.tips.map(tip => tip.id);

  const resetAcummulation = () => {
    setAccumulations(props.accumulation)
  }

  const addToAccumulation = (tips: ITip[]) => {
    console.log({tips})
    const newAccumulation = {...accumulation, tips: accumulation.tips.concat(tips)}
    setAccumulations(newAccumulation);
    removeFromAvailableTips(tips)
  }

  const removeFromAccumulation = (tips: ITip[]) => {
    // console.log({tips})
    const tipIds = tips.map(t => t.id)
    const arr = accumulation.tips.filter((m: ITip) => !tipIds.includes(m.id));

    setAccumulations({...accumulation, tips: arr});
    setAvailableTips(availableTips.concat(tips))
  }

  const removeFromAvailableTips = (tips: ITip[]) => {
    const arr = availableTips;

    tips.forEach((tip) => {
      const index = arr.indexOf(tip);
      arr.splice(index, 1);
    })
    setAvailableTips(arr);
  }

  const [filterTips, {loading}] = useLazyQuery<FilterResponse, FilterOptions>(gql(fetchTipQuery), {onCompleted: (data: FilterResponse) => setAvailableTips(data.fetchTips)});

  return (
    <div>
      <Accumulation accumulation={accumulation} resetAcummulation={resetAcummulation} removeFromAccumulation={removeFromAccumulation} />
      <Divider orientation="left" >Other Great Games</Divider>
      <AvailableGames tips={availableTips} addToAccumulation={addToAccumulation} currentTips={currentlySelectedTips} filterTips={filterTips} loading={loading || props.loading as boolean}/>
    </div>
  );
};

export default View;