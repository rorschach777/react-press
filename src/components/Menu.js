import React from 'react';
import { NavLink } from 'react-router-dom';
import {formatNavLink} from '../utilities/utilities';
const Menu = (props) => {
   
    return (
        <div className="menu">
            <ul>
                {props.menuPrimary.map((mi, i) => {
                    const navLink = formatNavLink(mi.title);
                    return (
                        <li key={`nav-menu-item-${i}`}>
                            <NavLink 
                            exact 
                            to={navLink} 
                            onClick={()=>props.setCurrentRoute(navLink)}
                            >
                                {mi.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>   
        </div>
    );
};
export default Menu;