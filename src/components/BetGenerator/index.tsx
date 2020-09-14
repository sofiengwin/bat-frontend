import * as React from 'react';
import BetGeneratorForm from './Form';
import GeneratedBet from './GeneratedBet'
import {betGeneratorQuery, GeneratorOptions ,Response as BetGeneratorResponse} from '../../data/graphql/betGenerator';
import { fetchTipQuery, Response, FilterOptions } from '../../data/graphql/fetchTips';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import AppLoadingModal from '../ui/AppLoadingModal';



const BetGenerator = () => {
  const [oddRange, setOddRange] = React.useState<[number, number]>([1.01, 1.5])
  const [fetchTips, {loading: loadingAvailableTips, data: availableTips}] = useLazyQuery<Response, FilterOptions>(gql(fetchTipQuery))
  const [generateBet, {loading, data}] = useLazyQuery<BetGeneratorResponse, GeneratorOptions>(gql(betGeneratorQuery), {onCompleted: (d: BetGeneratorResponse) => {
    console.log('fetchimg')
    fetchTips({variables: {
      currentTips: d.betGenerator.map(tip => tip.id),
      minOdd: oddRange[0],
      maxOdd: oddRange[1],
    }});
  }})
  const tips = availableTips ? availableTips.fetchTips : [];

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