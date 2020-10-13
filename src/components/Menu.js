import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="menu">
            <ul>
                <NavLink exact to="xyz">XYZ</NavLink>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
                <li>Menu Item</li>
            </ul>
        </div>
    );
};
export default Menu;