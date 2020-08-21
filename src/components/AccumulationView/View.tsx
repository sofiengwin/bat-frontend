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
    removeFromAvailableTips(tips)
  }

  const removeFromAccumulation = (tips: ITip[]) => {
    console.log({tips})
    const tipIds = tips.map(t => t.id)
    const arr = accumulation.tips.filter((m: ITip) => !tipIds.includes(m.id));

    setAccumulations({...accumulation, tips: arr});
    setAvailableMateches(availableTips.concat(tips))
  }

  const removeFromAvailableTips = (tips: ITip[]) => {
    const arr = availableTips;

    tips.forEach((tip) => {
      const index = arr.indexOf(tip);
      arr.splice(index, 1);
    })
    setAvailableMateches(arr);
  }

  const currentlySelectedTips = accumulation.tips.map(tip => tip.id);

  return (
    <div>
      <Accumulation accumulation={accumulation} resetAcummulation={resetAcummulation} removeFromAccumulation={removeFromAccumulation} />
      <Divider orientation="left" >Other Great Games</Divider>
      <AvailableGames tips={availableTips} addToAccumulation={addToAccumulation} currentTips={currentlySelectedTips} />
    </div>
  );
};

export default View;