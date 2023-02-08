import * as React from "react";
import { Avatar, Menu, MenuProps } from "antd";
import styled from "../../styles";
import { useAppContext } from "../App";
import { NavigateFunction, useNavigate } from "react-router-dom";
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
  {
    label: "Post Tip",
    key: "/post-tip/country",
  },
];

const menus = (
  user: IUser | null,
  logOut: () => void,
  navigate: NavigateFunction,
  showLogin?: () => void,
): MenuProps["items"] =>
  user
    ? [
        {
          label: <Avatar src={user?.avatarUrl} size={"large"} onClick={() => navigate(`/profile/${user?.id}`)}/>,
          key: `/profile/${user?.id}`,
          children: [
            {
              type: 'group',
              label: <div onClick={logOut}>Logout</div>,
              key: '#'
            }
          ]
        },
      ]
    : [
        {
          label: <div onClick={showLogin}>Login</div>,
          key: "#",
        },
      ];

const DesktopMenu: React.FC<Props> = ({ showLogin }) => {
  const { user, logOut } = useAppContext();
  console.log({user});
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
  };

  const authenticatedItems = menus(user, logOut, navigate, showLogin);
  console.log({authenticatedItems});

  return (
    <Flex style={{ justifyContent: "space-between" }}>
      <Flex>
        <div className="bet-haven">My Bet Haven</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["3"]}
          items={items}
          onClick={onClick}
          disabledOverflow={true}
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
