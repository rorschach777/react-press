import React from 'react';

const CardDoubleSided = (props) => {
    return (
        <div class={`Card Card--double-sided Card--${props.modifier}`}>
            <h4>{props.headline}</h4>
            <h5>{props.subHeadline}</h5>
        </div>
    );
};

export default CardDoubleSided;