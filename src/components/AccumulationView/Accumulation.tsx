import * as React from "react";
import {CloseCircleTwoTone} from '@ant-design/icons'
import ActionButtons from "./ActionButtons";
import ActionInputs from "./ActionInputs";
import Item from './Item';
import { IAccumulation } from "../../models/Accumulation";
import CustomList from "../CustomList";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { createAccumulationQuery, Response } from "../../data/graphql/createAccumulation";
import AppLoadingModal from "../ui/AppLoadingModal";
import { useAppContext } from "../App";
import { useFoster } from "../Fosterage";
import LoginModal from "../Layout/Login";
import { useHistory } from "react-router-dom";

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
  const [showLogin, setShowLogin] = React.useState<boolean>(false);

  const {tips} = accumulation;

  const {user} = useAppContext();
  const {foster} = useFoster();
  const history = useHistory();

  React.useEffect(() => {
    const totalOdds = tips.length > 0 ? tips.map((tip) => tip.odd).reduce((total, current) => total *= current) : 1;
    setOdd(totalOdds);
    setWinning(odd * stake)
  }, [tips, stake, odd])


  const [
    createAccumulation, 
    {loading}
  ] = useMutation<Response, {tips: string[]}>(gql(createAccumulationQuery), {variables: {tips: tips.map(t => t.id)}});

  const createAccumulationSuccess = async () => {
    await createAccumulation();
    setShowLogin(false);
    console.log({user})
    if (user) {
      history.push(`/profile/${user.id}`)
    }
  }

  return (
    <>
      <AppLoadingModal visible={loading} />
      <LoginModal 
        visible={showLogin}
        handleCancel={() => {
          createAccumulationSuccess();
        }}
      />
      <CustomList
        loading={loading}
        tips={tips}
        header={<h3>Value Bets By {accumulation.userName} for {accumulation.day} </h3>}
        footer={<ActionInputs stake={stake} odds={odd} winnings={winning} setStake={setStake} />}
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
      <ActionButtons resetAcummulation={resetAcummulation} onSave={() => {
        if (user) {
          createAccumulationSuccess();
        } else {
          setShowLogin(true);
        }
      }}/>
    </>
  );
};

export default Accumulation;
