import React from 'react';

const CardDoubleSided = (props) => {
    return (
        <div className={`Card__double-sided `}>
            <div className={`Card__double-sided__side Card__double-sided__side--front Card--${props.frontModifier}`}>
                <h4>{props.frontHeadline}</h4>
                <h5>{props.frontSubHeadline}</h5>
                <p>{props.bodyText}</p>
            </div>
            <div className={`Card__double-sided__side Card__double-sided__side--back Card--${props.backModifier}`}>
                <h4>{props.backHeadline}</h4>
                <h5>{props.backSubHeadline}</h5>
            </div>
        </div>
    );
};

export default CardDoubleSided;