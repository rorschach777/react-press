import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import DrawerMenu from './DrawerMenu';
const Header = (props) => {
        return (
           <div className="Header">
             <div className="Header__inner">
              <Logo/>
              <Menu 
              menuPrimary={props.menuPrimary}
              setCurrentRoute={props.setCurrentRoute}
              />
             </div>
           </div>
        );
}

export default Header;


