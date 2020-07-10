import * as React from 'react';
import AccumulationView from '../AccumulationView/View'

const match = {
  id: 1,
  odd: 1.5,
  league: 'Premier League',
  country: 'England', 
  confidence: '80.0%',
}

const data = Array(10).fill(undefined).map((_, i) => ({...match, id: i + 1}))

const GeneratedBet = () => {
  return (
    <AccumulationView availableMatches={data} accumulation={data} />
  )
}

export default GeneratedBet;