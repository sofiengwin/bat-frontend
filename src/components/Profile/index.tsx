import * as React from "react";
import { Col, Row } from "antd";
import ProfileHeader from "./ProfileHeader";
import { gql, useQuery } from "@apollo/client";
import { profileQuery, Response } from "../../data/graphql/profile";
import { useLocation, useParams } from "react-router-dom";
import AppLoadingModal from "../ui/AppLoadingModal";
import ProfileDetails from "./ProfileDetails";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const location = useLocation();
  const { data, loading, refetch } = useQuery<Response, {}>(gql(profileQuery), {
    variables: { userId: userId },
  });

  const savedAccumulation = location.state && location.state.savedAccumulation;
  console.log({ savedAccumulation });
  React.useEffect(() => {
    if (savedAccumulation) {
      console.log("refetching");
      refetch({ userId: userId });
    }
    // eslint-disable-next-line
  }, [savedAccumulation]);

  console.log({ data });
  return (
    <>
      {data ? (
        <>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <ProfileHeader
                totalTips={data.profile.totalTips}
                totalWins={data.profile.totalWins}
                totalPoints={data.profile.totalPoints}
                userName={data.profile.name}
                avatarUrl={data.profile.avatarUrl}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Col span={24}>
              <ProfileDetails
                tips={data.profile.tips}
                accumulations={data.profile.accumulations}
                loading={loading}
              />
            </Col>
          </Row>
        </>
      ) : (
        <AppLoadingModal visible={loading} />
      )}
    </>
  );
};

export default Profile;
