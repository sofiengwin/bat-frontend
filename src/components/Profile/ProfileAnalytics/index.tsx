import * as React from "react";
import { Card, Statistic, Tabs } from "antd";

import styled from "../../../styles";
import { useCallback, Component } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
export interface ProfileAnalyticsProps {
  totalTips: number;
  totalWins: number;
  totalPoints: number;
}

const tabs = [
  { id: "1", label: "Total Tips", children: "totalTip" },
  { id: "2", label: "Week", children: "week" },
  { id: "3", label: "Month", children: "month" },
];

const ProfileAnalytics: React.FC<ProfileAnalyticsProps> = ({
  totalTips,
  totalWins,
  totalPoints,
}) => {
  const Analytics = useCallback(
    () => (
      <Grid>
        <Card>
          <Statistic
            title="Total Tips"
            value={totalTips}
            valueStyle={{ color: "#3f8600" }}
            // prefix= type="arrow-up" />}
          />
        </Card>
        <Card>
          <Statistic
            title="Total Wins"
            value={totalWins}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            // prefix= type="arrow-up" />}
          />
        </Card>
        <Card>
          <Statistic
            title="Total Points"
            value={totalPoints}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            // prefix={<Icon type="arrow-up" />}
          />
        </Card>
      </Grid>
    ),
    []
  );

  const components: any = {
    totalTip: <Analytics />,
    week: <div>This Week</div>,
    month: <div>This Month</div>,
  };

  return (
    <Tabs
      defaultActiveKey="1"
      // centered
      items={tabs.map((tab) => {
        const children = components[tab.children];
        return {
          label: tab.label,
          key: tab.id,
          children,
        };
      })}
    />
  );
};

export default ProfileAnalytics;
