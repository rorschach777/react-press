import React from 'react';
import ButtonReadMore from './ButtonReadMore';
const Card = (props) => {
    return (
        <div style={{height:`${props.height}rem`}} className={`Card Card--${props.modifier}`}>
            {props.enableIcon ? <img className="icon" src={props.iconURL}/> : null}
            <h4>{props.headline}</h4>
            <h5>{props.subHeadline}</h5>
            <p>{props.bodyText}</p>
            {props.enableButton ? <ButtonReadMore text={props.buttonText} url={props.buttonURL}/> : null }
            {props.children}
        </div>
    );
};

export default Card;