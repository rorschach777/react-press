import React from 'react';
const Card = (props) => {
    return (
        <div className={`Card Card--${props.modifier}`}>
            <h4>{props.headline}</h4>
            <h5>{props.subHeadline}</h5>
            <p>{props.bodyText}</p>
            {/* <button>A button</button> */}
            {props.enableButton? <a href={props.buttonURL}>{props.buttonText}</a> : null }
          
        </div>
    );
};

export default Card;