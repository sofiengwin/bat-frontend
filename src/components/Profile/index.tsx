import * as React from 'react';
import {Row} from 'antd';
import ValueAccumulations from '../ValueAccumulations'
import ProfileHeader from './ProfileHeader';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { profileQuery, Response } from '../../data/graphql/profile';
import { useParams } from 'react-router-dom';
import AppLoadingModal from '../ui/AppLoadingModal';
import ProfileDetails from './ProfileDetails';

const Profile = () => {
  const {userId} = useParams();
  const {data, loading} = useQuery<Response, {}>(gql(profileQuery), {variables: {userId: userId}});

  return (
    <>
      {data ? (
        <>
          <Row style={{marginBottom: '20px'}}>
            <ProfileHeader
              totalTips={data.profile.totalTips}
              totalWins={data.profile.totalWins}
              totalPoints={data.profile.totalPoints}
              userName={data.profile.name} avatarUrl={data.profile.avatarUrl} />
          </Row>

          <Row style={{marginBottom: '20px'}}>
            <ProfileDetails
              tips={data.profile.tips}
              accumulations={data.profile.accumulations}
              loading={loading}
            />
          </Row>
        </>
      ) : (
        <AppLoadingModal visible={loading} />
      )}
    </>
  );
}

export default Profile;