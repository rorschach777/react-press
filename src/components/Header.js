import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import DrawerMenu from './DrawerMenu';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
  return (
    <>
    <DrawerMenu 
    drawer={props.drawer}
    closeDrawer={props.closeDrawer}
    />
    <div className="Header">
      <div className="Header__inner">
        <div className="Header__inner__logo">
          <NavLink exact to="/"><Logo /></NavLink>
        </div>
        <Menu
          menuPrimary={props.menuPrimary}
          setCurrentRoute={props.setCurrentRoute}
        />
      </div>
    </div>
    </>
  );
}

export default Header;


