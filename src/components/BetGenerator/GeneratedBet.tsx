import * as React from 'react';
import AccumulationView from '../AccumulationView/View'
import { ITip } from '../../models/Tip';
import { IAccumulation } from '../../models/Accumulation';

interface Props {
  generatedTips: ITip[];
  availableTips: ITip[];
  loadingAvailableTips: boolean;
}

const GeneratedBet: React.FC<Props> = ({generatedTips, availableTips, loadingAvailableTips}) => {
  const accumulation: IAccumulation = {
    id: '1',
    rating: '90%',
    tips: generatedTips,
    userId: '1',
    userName: 'Idaboski',
    day: '18 August'
  }
  return (
    <AccumulationView availableTips={availableTips} accumulation={accumulation} loading={loadingAvailableTips} />
  )
}

export default GeneratedBet;