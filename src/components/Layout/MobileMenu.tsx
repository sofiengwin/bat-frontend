import * as React from 'react';
import {Link} from 'react-router-dom';
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
const MenuItem = styled.div`
  text-decoration: none;
  display: block;
  padding: 16px 0;
  font-size: 20px;
`;
const MobileMenu: React.FC<Props> = ({onClose, showDrawer, onClick}) => {
  return (
    <>
      <Flex>
        <h2 style={{color: 'white'}}>Name</h2>
        <MenuFoldOutlined style={{fontSize: '64px', color: 'white'}} onClick={onClick}/>
      </Flex>
      <Drawer
        placement={'left'}
        closable={true}
        onClose={onClose}
        visible={showDrawer}
      >
        <MenuItem onClick={onClose}><Link to='/'>Home</Link></MenuItem>
        <MenuItem onClick={onClose}><Link to='/profile'>Profile</Link></MenuItem>
        <MenuItem onClick={onClose}><Link to='/offers'>Offers</Link></MenuItem>
        <MenuItem onClick={onClose}><Link to='/bookmakers'>Bookmakers</Link></MenuItem>
        <MenuItem onClick={onClose}><Link to='/bet-generator'>Bet Generator</Link></MenuItem>
        <MenuItem onClick={onClose}><Link to='/user-ranking'>Users Ranking</Link></MenuItem>
        <MenuItem onClick={onClose}><Link to='/trending-bets'>Trending Bets</Link></MenuItem>
      </Drawer>
    </>
  )
}

export default MobileMenu;