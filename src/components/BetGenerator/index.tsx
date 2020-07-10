import * as React from 'react';
import BetGeneratorForm from './Form';
import GeneratedBet from './GeneratedBet'

const BetGenerator = () => {
  const [showGenerated, setShowGenerated] = React.useState<boolean>(false)
 
  return (
    <>
      {showGenerated ? (
        <GeneratedBet />
      ) : (
        <BetGeneratorForm onGenerate={() => setShowGenerated(true)}/>
      )}
    </>
  )
}

export default BetGenerator;