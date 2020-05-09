import * as React from "react";
import styled from "../../styles";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import LoginModal from "./Login";

interface State {
  showLogin: boolean;
}

const Flex = styled.div`
  display: flex;
`;
class Header extends React.Component<{}, State> {
  state: State = { showLogin: false };

  handleShow = () => {
    this.setState({ showLogin: true });
  };

  handleCancel = () => {
    this.setState({ showLogin: false });
  };

  render() {
    return (
      <>
        <LoginModal
          visible={this.state.showLogin}
          handleCancel={this.handleCancel}
        />
        <Layout>
          <Layout.Header>
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
                <Menu.Item key='4' onClick={this.handleShow}>
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
          </Layout.Header>
        </Layout>
      </>
    );
  }
}

export default Header;
