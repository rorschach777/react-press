import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';

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
            <PageHeader
            className="site-page-header header"
            // onBack={() => {
            //     router.push("/")
            // }}
            title="Title"
            subTitle="This is a subtitle"
            extra={[
                <Menu key="Header-Component-1"/>,
                <DrawerMenu key="Header-Component-2" 
                visible={this.state.visible} 
                placement={this.state.placement}
                onClose={this.onClose}
                />
            ]}
            >
           </PageHeader>
        );
    }
}

export default Header;


