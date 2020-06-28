import * as React from "react";
import Accumulation from "./Accumulation";
import AvailableGames from './AvailableMatches';
import { Divider } from "antd";

const match = {
  id: 1,
  odd: 1.5,
  league: 'Premier League',
  country: 'England', 
  confidence: '80.0%',
}

const data = Array(10).fill(undefined).map((_, i) => ({...match, id: i + 1}))


const AccumulationView = () => {
  const [accumulations, setAccumulations] = React.useState<any>([]);
  const [availableMatches, setAvailableMateches] = React.useState<any>([]);

  React.useEffect(() => {
    setAccumulations(data);
    setAvailableMateches(data);
  }, [])

  const resetAcummulation = () => {
    setAccumulations(data)
  }

  const addToAccumulation = (matches: any[]) => {
    const arr = accumulations.concat(matches);
    setAccumulations(arr);
    removeFromAvailableMatches(matches)
  }

  const removeFromAccumulation = (match: any) => {
    const arr = accumulations.filter((m: any) => m.id !== match.id);

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
      <Accumulation data={accumulations} resetAcummulation={resetAcummulation} removeFromAccumulation={removeFromAccumulation} />
      <Divider orientation="left" >Other Great Games</Divider>
      <AvailableGames data={availableMatches} addToAccumulation={addToAccumulation}/>
    </div>
  );
};

export default AccumulationView;