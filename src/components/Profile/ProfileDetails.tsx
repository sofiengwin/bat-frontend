import * as React from "react";
import Item from "../ValueAccumulations/Item";
import ListAccumulations from "../ValueAccumulations/ListAccumulations";
import CustomList from "../CustomList";
import { IAccumulation } from "../../models/Accumulation";
import { ITip } from "../../models/Tip";
import styled from "styled-components";

const Div = styled.div`
  .ant-list-item {
    padding: 0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

interface Props {
  tips: ITip[];
  accumulations: IAccumulation[];
  loading: boolean;
}

const ProfileDetails: React.FC<Props> = ({ tips, accumulations, loading }) => {
  return (
    <Div>
      {!!tips.length && (
        <CustomList tips={tips} header={<h3>Most Recent Tips</h3>}>
          {(leagueTips) => <Item leagueTips={leagueTips} loading={loading} />}
        </CustomList>
      )}
      <ListAccumulations accumulations={accumulations} loading={loading} />
    </Div>
  );
};
export default ProfileDetails;
