import * as React from 'react';
import OutcomeIcon from './OutcomeIcon';
import { ITip } from '../../models/Tip';
import {TipDetails, MatchName, LeagueCountryName, LeagueTipsWrapper} from '../ui/ItemHelpers';
import { Skeleton } from 'antd';

interface Props {
  leagueTips: [string, ITip[]];
  loading?: boolean;
}

const Item: React.FC<Props> = ({leagueTips, loading}) => {
  const [league, tips] = leagueTips;
  return (
    <Skeleton  title={false} loading={loading}>
      <LeagueTipsWrapper>
        <LeagueCountryName>{tips[0].match.country} - {league}</LeagueCountryName>
        <>
          {tips.map((tip) => (
            <TipDetails>
              <MatchName>
                Home vs Away
              </MatchName>
              <div>
                10.0
              </div>
              <div>
                89%
              </div>
              <div>
                BTTS
              </div>
              <div>
                <OutcomeIcon outcome={tip.outcome} fontSize='16px' />
              </div>
            </TipDetails>
          ))}
        </>
      </LeagueTipsWrapper>
    </Skeleton>
  );
}

export default Item;