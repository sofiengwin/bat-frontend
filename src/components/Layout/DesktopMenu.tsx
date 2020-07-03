import * as React from 'react';
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import styled from '../../styles';

const Flex = styled.div`
  display: flex;
`;
interface Props {
  showLogin: () => void;
}
const DesktopMenu: React.FC<Props> = ({showLogin}) => {
  return (
    <Flex style={{ justifyContent: "space-between" }}>
    <Flex>
      <div className=''>Nam</div>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/offers'>Offers</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/bookmakers'>Bookmakers</Link>
        </Menu.Item>
        <Menu.Item key='4'>
          <Link to='/value-accumulators'>Accumulations</Link>
        </Menu.Item>
      </Menu>
    </Flex>
    <Menu
      theme='dark'
      mode='horizontal'
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key='4' onClick={showLogin}>
        Login
      </Menu.Item>
      <Menu.Item key='5'>
        <Link to='/post-tip/countries'>Post</Link>
      </Menu.Item>
      <Menu.Item key='6'>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
    </Menu>
  </Flex>
  );
}

export default DesktopMenu;