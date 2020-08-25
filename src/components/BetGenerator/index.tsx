import * as React from 'react';
import BetGeneratorForm from './Form';
import GeneratedBet from './GeneratedBet'
import {betGeneratorQuery, GeneratorOptions ,Response as BetGeneratorResponse} from '../../data/graphql/betGenerator';
import { fetchTipQuery, Response, FilterOptions } from '../../data/graphql/fetchTips';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import AppLoadingModal from '../ui/AppLoadingModal';



const BetGenerator = () => {
  const [showGenerated, setShowGenerated] = React.useState<boolean>(false);
  const [fetchTips, {loading: loadingAvailableTips, data: availableTips}] = useLazyQuery<Response, FilterOptions>(gql(fetchTipQuery), {variables: {currentTips: []}})
  const [generateBet, {loading, data}] = useLazyQuery<BetGeneratorResponse, GeneratorOptions>(gql(betGeneratorQuery), {onCompleted: (_data) => {
    fetchTips();
    setShowGenerated(true);
  }})
  const tips = availableTips ? availableTips.fetchTips : [];
  console.log({tips, availableTips})
  return (
    <>
      {showGenerated ? (
        <GeneratedBet
          generatedTips={data?.betGenerator || []}
          availableTips={tips}
          loadingAvailableTips={loadingAvailableTips}
        />
      ) : (
        <>
          <AppLoadingModal visible={loading} />
          <BetGeneratorForm onGenerate={generateBet}/>
        </>
      )}
    </>
  )
}

export default BetGenerator;