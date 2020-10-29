import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="menu">
            <ul>
                {props.menuPrimary.map((mi, i) => {
                    return (
                        <li key={`nav-menu-item-${i}`}>
                            <NavLink 
                            exact 
                            to={mi.title.toLowerCase()} 
                            onClick={()=>props.setCurrentRoute(mi.title.toLowerCase())}
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