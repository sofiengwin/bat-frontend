import * as React from "react";
import Accumulation from "./Accumulation";
import AvailableGames from './AvailableMatches';
import { Divider } from "antd";

interface Props {
  accumulation: any[];
  availableMatches: any[];
}

const View: React.FC<Props> = (props) => {
  const [accumulation, setAccumulations] = React.useState<any>([]);
  const [availableMatches, setAvailableMateches] = React.useState<any>([]);

  React.useEffect(() => {
    setAccumulations(props.accumulation);
    setAvailableMateches(props.availableMatches);
  }, [])

  const resetAcummulation = () => {
    setAccumulations(props.accumulation)
  }

  const addToAccumulation = (matches: any[]) => {
    const arr = accumulation.concat(matches);
    setAccumulations(arr);
    removeFromAvailableMatches(matches)
  }

  const removeFromAccumulation = (match: any) => {
    const arr = accumulation.filter((m: any) => m.id !== match.id);

    setAccumulations(arr);
    setAvailableMateches(availableMatches.concat(match))
  }

  const removeFromAvailableMatches = (matches: any[]) => {
    const arr = availableMatches;

    matches.forEach((match) => {
      const index = arr.indexOf(match);
      arr.splice(index, 1);
    })
    setAvailableMateches(arr);
  }

  return (
    <div>
      <Accumulation data={accumulation} resetAcummulation={resetAcummulation} removeFromAccumulation={removeFromAccumulation} />
      <Divider orientation="left" >Other Great Games</Divider>
      <AvailableGames data={availableMatches} addToAccumulation={addToAccumulation}/>
    </div>
  );
};

export default View;