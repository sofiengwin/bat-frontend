import * as React from "react";
import {CloseCircleTwoTone} from '@ant-design/icons'
import ActionButtons from "./ActionButtons";
import ActionInputs from "./ActionInputs";
import Item from './Item';
import { IAccumulation } from "../../models/Accumulation";
import CustomList from "../CustomList";

interface Props {
  accumulation: IAccumulation;
  resetAcummulation: () => void;
  removeFromAccumulation: (match: any) => void;
}

const Accumulation: React.FC<Props> = ({ accumulation, resetAcummulation, removeFromAccumulation }) => {
  const [selectedId, setSelected] = React.useState<number>(0);
  const [stake, setStake] = React.useState<number>(1000);
  const [odd, setOdd] = React.useState<number>(1);
  const [winning, setWinning] = React.useState<number>(1000);
  const {tips} = accumulation;

  React.useEffect(() => {
    const totalOdds = tips.length > 0 ? tips.map((tip) => tip.odd).reduce((total, current) => total *= current) : 1;
    setOdd(totalOdds);
    setWinning(odd * stake)
  }, [tips, stake, odd])
  console.log({winning, odd, stake});

  return (
    <>
      <CustomList
        tips={tips}
        header={<h3>Value Bets By @user</h3>}
        footer={<ActionInputs stake={stake} odds={odd} winnings={winning} setStake={setStake}/>}
      >
        {(leagueTips) => (
          <Item
            leagueTips={leagueTips}
            selectedId={selectedId}
            setSelected={setSelected}
            render={(tip) => (
              <CloseCircleTwoTone twoToneColor="red" onClick={() => removeFromAccumulation([tip])}/>
            )}
          />
        )}
      </CustomList>
      <ActionButtons resetAcummulation={resetAcummulation}/>
    </>
  );
};

export default Accumulation;
