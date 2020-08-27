import * as React from 'react';
import { List } from 'antd';
import { ITip } from '../../models/Tip';

const groupTips = (tips: ITip[]): Dict<ITip[]> => {
  const groubByLeague: {[key: string]: ITip[]} = {};
  tips.forEach((tip: ITip) => {
    groubByLeague[tip.match.league] = groubByLeague[tip.match.league] ? [...groubByLeague[tip.match.league], tip] : Array(tip);
  });

  return groubByLeague;
}

interface Props {
  tips: ITip[];
  children: (leagueTips: [string, ITip[]]) => React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
}
const CustomList: React.FC<Props> = ({children, tips, header, footer, loading}) => {
  const groupedTips: Dict<ITip[]> = groupTips(tips);
  return (
    <List
      header={header}
      footer={footer}
      size='large'
      loading={loading}
      dataSource={Object.entries(groupedTips)}
      renderItem={(leagueTips: [string, ITip[]]) => (
        <List.Item key={leagueTips[0]}>
          {children(leagueTips)}
        </List.Item>
      )}
    />
  );
};

export default CustomList;

