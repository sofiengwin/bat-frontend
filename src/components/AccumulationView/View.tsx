import * as React from "react";
import Accumulation from "./Accumulation";
import AvailableGames from './AvailableMatches';
import { Divider } from "antd";
import { IAccumulation } from "../../models/Accumulation";
import { ITip } from "../../models/Tip";

interface Props {
  accumulation: IAccumulation;
  availableTips: ITip[];
}

const View: React.FC<Props> = (props) => {
  const [accumulation, setAccumulations] = React.useState<IAccumulation>(props.accumulation);
  const [availableTips, setAvailableMateches] = React.useState<ITip[]>([]);

  React.useEffect(() => {
    setAccumulations(props.accumulation);
    setAvailableMateches(props.availableTips);
  }, [])

  const resetAcummulation = () => {
    setAccumulations(props.accumulation)
  }

  const addToAccumulation = (tips: ITip[]) => {
    const newAccumulation = {...accumulation, tips: accumulation.tips.concat(tips)}
    setAccumulations(newAccumulation);
    removeFromAvailableMatches(tips)
  }

  const removeFromAccumulation = (tips: ITip[]) => {
    // const arr = availableTips.filter((m: any) => m.id !== match.id);

    // setAvailableMateches(availableTips.concat(match))
  }

  const removeFromAvailableMatches = (matches: any[]) => {
    const arr = availableTips;

    matches.forEach((match) => {
      const index = arr.indexOf(match);
      arr.splice(index, 1);
    })
    setAvailableMateches(arr);
  }

  return (
    <div>
      <Accumulation accumulation={accumulation} resetAcummulation={resetAcummulation} removeFromAccumulation={removeFromAccumulation} />
      <Divider orientation="left" >Other Great Games</Divider>
      <AvailableGames data={availableTips} addToAccumulation={addToAccumulation}/>
    </div>
  );
};

export default View;