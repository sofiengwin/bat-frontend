import * as React from 'react';
import BetGeneratorForm from './Form';
import GeneratedBet from './GeneratedBet'
import {betGeneratorQuery, GeneratorOptions ,Response as BetGeneratorResponse} from '../../data/graphql/betGenerator';
import { fetchTipQuery, Response, FilterOptions } from '../../data/graphql/fetchTips';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import AppLoadingModal from '../ui/AppLoadingModal';



const BetGenerator = () => {
  const [oddRange, setOddRange] = React.useState<[number, number]>([1.5, 2.5])
  const [fetchTips, {loading: loadingAvailableTips, data: availableTips}] = useLazyQuery<Response, FilterOptions>(gql(fetchTipQuery), {variables: {currentTips: []}})
  const [generateBet, {loading, data}] = useLazyQuery<BetGeneratorResponse, GeneratorOptions>(gql(betGeneratorQuery), {onCompleted: (_data) => {
    fetchTips();
  }})
  const tips = availableTips ? availableTips.fetchTips : [];
  console.log({tips, availableTips})
  return (
    <>
      {data?.betGenerator ? (
        <GeneratedBet
          generatedTips={data?.betGenerator || []}
          availableTips={tips}
          loadingAvailableTips={loadingAvailableTips}
        />
      ) : (
        <>
          <AppLoadingModal visible={loading} />
          <BetGeneratorForm
            onGenerate={generateBet}
            oddRange={oddRange}
            onChangeOdd={setOddRange}
          />
        </>
      )}
    </>
  )
}

export default BetGenerator;