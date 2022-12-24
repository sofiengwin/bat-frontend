import * as React from "react";
import { Menu } from "antd";
import styled from "../../styles";
import { useAppContext } from "../App";

const Flex = styled.div`
  display: flex;

  .bet-haven {
    color: #ffffff;
  }
`;
interface Props {
  showLogin: () => void;
}
const DesktopMenu: React.FC<Props> = ({ showLogin }) => {
  const { user } = useAppContext();
  return (
    <Flex style={{ justifyContent: "space-between" }}>
      <Flex>
        <div className="bet-haven">Bet Haven</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">{/* <Link to='/'>Home</Link> */}</Menu.Item>
          <Menu.Item key="2">
            {/* <Link to='/offers'>Offers</Link> */}
          </Menu.Item>
          <Menu.Item key="4">
            {/* <Link to='/value-accumulators'>Accumulations</Link> */}
          </Menu.Item>
          <Menu.Item key="5">
            {/* <Link to='/bet-generator'>Bet Generator</Link> */}
          </Menu.Item>
        </Menu>
      </Flex>

      {user ? (
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="6">
            {/* <Link to={`/profile/${user.id}`}>
              <Avatar src={user.avatarUrl} size={'large'} />
            </Link> */}
          </Menu.Item>
        </Menu>
      ) : (
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="7" onClick={showLogin}>
            Login
          </Menu.Item>
        </Menu>
      )}
    </Flex>
  );
};

export default DesktopMenu;
