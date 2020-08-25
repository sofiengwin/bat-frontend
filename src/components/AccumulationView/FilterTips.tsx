import * as React from 'react';
import SelectInput from '../ui/SelectInput';
import {COUNTRIES, BET_TYPES, ODDS} from '../../lib/filterOptions';
import styled from '../../styles';
import { Button } from "antd";
import { useState } from 'react';
import { FilterOptions} from '../../data/graphql/fetchTips';

const Filter = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  grid-gap: 10px;
  margin: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) {
    grid-template-columns: 0.9fr;
    grid-gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export type IFilterTipsFunctions = (options: {variables: FilterOptions}) => void;

interface Props {
  loading: boolean;
  filterTips: IFilterTipsFunctions;
  currentTips: string[];
}

const FilterTips: React.FC<Props> = ({loading, filterTips, currentTips}) => {
  const [betType, setBetType] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [odd, setOdd] = useState<string | undefined>(undefined);
  return (
    <Filter>
      <SelectInput options={COUNTRIES} onChange={(value) => setCountry(value)} placeholder="Select Country" value={country} />
      <SelectInput options={BET_TYPES} onChange={(value) => setBetType(value)} placeholder="Select Bet Type" value={betType} />
      <SelectInput options={ODDS} onChange={(value) => setOdd(value)} placeholder="Select Odd Range" value={odd} />
      <Button
        type="primary"
        onClick={() => {
          let minOdd, maxOdd;
          if (odd) {
            const  [min, max] = odd?.split('-');

            minOdd = min.trim();
            maxOdd = max.trim();
          }

          filterTips({variables: {
            betType,
            country,
            currentTips,
            maxOdd,
            minOdd,
          }})
        }}
      >
        Filter
      </Button>
    </Filter>
  );
};

export default FilterTips;