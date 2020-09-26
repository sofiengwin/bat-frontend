import * as React from 'react';
import {Checkbox, Skeleton } from 'antd';
import { ITip } from '../../models/Tip';
import {TipDetails, MatchName, LeagueCountryName, LeagueTipsWrapper, BetName} from '../ui/ItemHelpers';

interface Props {
  leagueTips: [string, ITip[]];
  selectedId: number;
  setSelected: (id: number) => void;
  onSelect?: (e: any) => void;
  render: (tip: ITip) => React.ReactNode;
}

const Item: React.FC<Props> = (props) => {
  const [league, tips] = props.leagueTips;
  return (
    <Skeleton  title={false} loading={false}>
      <LeagueTipsWrapper>
        <LeagueCountryName>{tips[0].match.country} - {league}</LeagueCountryName>
        <>
          {tips.map((tip) => (
            <TipDetails key={tip.id}>
              <MatchName
                onClick={() => props.setSelected(Number(tip.id))}             
              >
                <Checkbox onChange={props.onSelect} value={tip.id}  style={{marginRight: '10px'}}/>
                {tip.match.homeTeamName} vs {tip.match.awayTeamName}
              </MatchName>
              <BetName>{tip.bet}</BetName>
              <div>{tip.odd}</div>
              <div>{props.render(tip)}</div>
            </TipDetails>
          ))}
        </>
      </LeagueTipsWrapper>
    </Skeleton>
  );
}

export default Item;

