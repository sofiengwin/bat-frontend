import * as React from 'react';
import AccumulationView from '../AccumulationView/View'
import { ITip } from '../../models/Tip';
import { IAccumulation } from '../../models/Accumulation';

const match = {
  id: '1',
  odd: 1.5,
  league: 'Premier League',
  country: 'England', 
  rating: '80.0%',
  score: '2 - 2',
  awayTeamName: 'Manchester United',
  homeTeamName: 'Chelsea',
}

const tip: ITip = {
  bet: '1X',
  id: '1',
  match: match,
  rating: '80%',
  outcome: 'PENDING',
  odd: 1.55
}

const countries = [
  'England',
  'Spain',
  'France',
  'Italy',
  'Germany',
  'Norway',
  'Denmark',
  'Nigeria',
  'South Africa',
  'Sweden'
];
const leagues = [
  'Premier League',
  'La Liga BBVA',
  'Ligue 1',
  'Seria A',
  'Bundesliga',
  'Super Liga',
  'Main Liga',
  'Super League',
  'Great Liga',
  'Liga Lag'
];


const tips = Array(10).fill(undefined).map((_, i) => {
  const copyTip = {...tip, id: String(i + 1), match: {...match, id: String(i + 1), league: leagues[i], country: countries[i]}};
  
  console.log({copyTip})
  return copyTip;
})
console.log({tips})
const accumulation: IAccumulation = {
  id: '1',
  rating: '90%',
  tips: tips.slice(0, 3),
}

const GeneratedBet = () => {
  return (
    <AccumulationView availableTips={tips} accumulation={accumulation} />
  )
}

export default GeneratedBet;