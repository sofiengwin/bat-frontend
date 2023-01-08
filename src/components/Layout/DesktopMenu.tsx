import * as React from "react";
import { Avatar, Menu, MenuProps } from "antd";
import styled from "../../styles";
import { useAppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/User";

const Flex = styled.div`
  display: flex;

  .bet-haven {
    color: #ffffff;
  }
`;
interface Props {
  showLogin: () => void;
}

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Offers",
    key: "/offers",
  },
  {
    label: "Accumulations",
    key: "/value-accumulators",
  },
  {
    label: "Bet Generator",
    key: "/bet-generator",
  },
];

const menus = (
  user: IUser | null,
  showLogin?: () => void
): MenuProps["items"] =>
  user
    ? [
        {
          label: <Avatar src={user?.avatarUrl} size={"large"} />,
          key: `/profile/${user?.id}`,
        },
      ]
    : [
        {
          label: <div onClick={showLogin}>Login</div>,
          key: "#",
        },
      ];

const DesktopMenu: React.FC<Props> = ({ showLogin }) => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
  };

  const authenticatedItems = menus(user, showLogin);

  return (
    <Flex style={{ justifyContent: "space-between" }}>
      <Flex>
        <div className="bet-haven">Bet Haven</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["3"]}
          items={items}
          onClick={onClick}
        />
      </Flex>

      <Flex>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          items={authenticatedItems}
          onClick={onClick}
          disabledOverflow={true}
        />
      </Flex>
    </Flex>
  );
};

export default DesktopMenu;
