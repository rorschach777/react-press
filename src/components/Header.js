import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import DrawerMenu from './DrawerMenu';
class Header extends React.Component {
    constructor(){
        super();
        this.state = { 
            visible: false, 
            placement: 'left' 
        };
    }
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    onChange = e => {
      this.setState({
        placement: e.target.value,
      });
    };
    render() {
        return (
           <div className="Header">
             <div className="Header__inner">
              <Logo/>
              <Menu/>
             </div>
           </div>
        );
    }
}

export default Header;


