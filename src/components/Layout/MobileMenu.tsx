import * as React from 'react';
import styled from '../../styles';
import { MenuFoldOutlined } from '@ant-design/icons/lib/icons';
import { Drawer } from 'antd';

const Flex = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 15px;
`;

interface Props {
  showDrawer: boolean;
  onClose: () => void;
  onClick: () => void;
}

const MobileMenu: React.FC<Props> = ({onClose, showDrawer, onClick}) => {
  return (
    <>
      <Flex>
        <h2 style={{color: 'white'}}>Name</h2>
        <MenuFoldOutlined style={{fontSize: '64px', color: 'white'}} onClick={onClick}/>
      </Flex>
      <Drawer
        title="Basic Drawer"
        placement={'left'}
        closable={true}
        onClose={onClose}
        visible={showDrawer}
      >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
    </>
  )
}

export default MobileMenu;