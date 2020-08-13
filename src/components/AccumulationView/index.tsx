import * as React from 'react';
import View from './View';

const match = {
  id: 1,
  odd: 1.5,
  league: 'Premier League',
  country: 'England', 
  confidence: '80.0%',
}

const data = Array(10).fill(undefined).map((_, i) => ({...match, id: i + 1}))

const AccumulationView = () => {
  // return (
  //   <View accumulation={data} availableMatches={data} />
  // );


  return null;
}

export default AccumulationView;