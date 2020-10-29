import React from 'react';
import { NavLink } from 'react-router-dom';
const renderMenuItems = (props) => {
    return(
        <ul>
            {props.menuPrimary.map((mi, i) => {
                return (
                    <li>
                        <NavLink exact to={mi.title.toLowerCase()} onClick={()=>props.setCurrentRoute(mi.title.toLowerCase())}>{mi.title}</NavLink>
                    </li>
                )
            })}
        </ul>   
    );
}
const Menu = (props) => {
    return (
        <div className="menu">
            <ul>
                {props.menuPrimary != null ? renderMenuItems(props) : "EMPTY"}
            </ul>
 
        </div>
    );
};
export default Menu;