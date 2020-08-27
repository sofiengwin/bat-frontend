import * as React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProfileAnalytics, {ProfileAnalyticsProps} from './ProfileAnalytics';
import styled from '../../styles';

type Props = ProfileAnalyticsProps & {
  userName: string;
  avatarUrl: string;
};

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 10px 20px;
`;

const UserName = styled.div`
  font-size: 19px;
  font-weight: 800;
`;

const ProfileHeader: React.FC<Props> = ({totalTips, totalWins, percentageWin, avatarUrl, userName}) => {
  return (
    <div>
      <AvatarWrapper>
        <Avatar size={64} icon={<UserOutlined />} src={avatarUrl} />
        <UserName>{userName}</UserName>
      </AvatarWrapper>
      <ProfileAnalytics totalTips={totalTips} totalWins={totalWins} percentageWin={percentageWin} />
    </div>
  );
};
export default ProfileHeader;