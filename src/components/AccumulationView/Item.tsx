import * as React from 'react';
import {Checkbox, Skeleton } from 'antd';
import { ITip } from '../../models/Tip';
import {TipDetails, MatchName, LeagueCountryName, LeagueTipsWrapper} from '../ui/ItemHelpers';

interface Props {
  leagueTips: [string, ITip[]];
  selectedId: number;
  setSelected: (id: number) => void;
  onAction: (tips: ITip[]) => void;
  onSelect?: (e: any) => void;
  render: () => React.ReactNode;
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
              <MatchName>
                <Checkbox onChange={props.onSelect} value={tip.id}/>
                <MatchName onClick={() => props.setSelected(Number(tip.id))} style={{marginLeft: '10px'}}>HomeHome vs AwayAway</MatchName>
              </MatchName>
              <div>BTTS</div>
              <div>1.55</div>
              <div onClick={() => props.onAction([tip])}>{props.render()}</div>
            </TipDetails>
          ))}
        </>
      </LeagueTipsWrapper>
    </Skeleton>
  );
}

export default Item;  