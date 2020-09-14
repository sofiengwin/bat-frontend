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
                {tip.match.homeTeamName} vs {tip.match.awayTeamName}
              </MatchName>
              <div>{tip.bet}</div>
              {/* <div>
                {tip.odd}
              </div>
              <div>
                80%
              </div> */}
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