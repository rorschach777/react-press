import React from 'react';
import {NavLink} from 'react-router-dom';
const NavigationLink = (props) => {
    return (
        <NavLink 
        exact 
        to={props.href} 
        onClick={()=>props.setCurrentRoute(props.href.toLowerCase())}
        className={`NavigationLink NavigationLink--${props.buttonModifier}`}>
            {props.children}
        </NavLink>
    );
};

export default NavigationLink;