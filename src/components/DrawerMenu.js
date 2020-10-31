import { Drawer, Button, Radio, Space } from 'antd';
import React, { Component } from 'react';

const DrawerMenu = (props) => {
    return (
      <Drawer
          title="Basic Drawer"
          placement={props.drawer.placement}
          closable={false}
          onClose={props.closeDrawer}
          visible={props.drawer.visible}
          key={props.placement}
      >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
      </Drawer>
    );
}
export default DrawerMenu;