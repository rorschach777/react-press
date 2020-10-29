import React from 'react';
import {NavLink} from 'react-router-dom';
const Button = (props) => {
    return (
        <NavLink 
        exact 
        to={props.href} 
        onClick={()=>props.setCurrentRoute(props.href.toLowerCase())}
        className={`Button Button--${props.buttonModifier}`}>
            {props.children}
        </NavLink>
    );
};

export default Button;