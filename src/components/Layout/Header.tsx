import * as React from "react";
import { useMediaQuery } from 'react-responsive'
import { Layout } from "antd";
import LoginModal from "./Login";
import DeskstopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu'

interface State {
  showLogin: boolean;
}

const Header = () => {
  const [showLogin, setShowLogin] = React.useState<boolean>(false);
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  return (
    <>
      <LoginModal
        visible={showLogin}
        handleCancel={() => setShowLogin(false) }
      />
      <Layout>
        <Layout.Header>
          {isDesktopOrLaptop ? (
            <DeskstopMenu showLogin={() => setShowLogin(true) } />
          ) : (
            <MobileMenu onClose={() =>setShowDrawer(false)} showDrawer={showDrawer} onClick={() => setShowDrawer(true) }/>
          )}
        </Layout.Header>
      </Layout>
    </>
  );
}

export default Header;
