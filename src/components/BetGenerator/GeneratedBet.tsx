import * as React from 'react';
import AccumulationView from '../AccumulationView/View'
import { ITip } from '../../models/Tip';
import { IAccumulation } from '../../models/Accumulation';
import {monthDay} from '../../lib/time';

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
    userId: '',
    userName: 'You',
    day: monthDay(),
  }
  console.log({generatedTips, availableTips})
  return (
    <AccumulationView availableTips={availableTips} accumulation={accumulation} loading={loadingAvailableTips} />
  )
}

export default GeneratedBet;
