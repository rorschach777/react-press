import React from 'react';
import ButtonReadMore from './ButtonReadMore';
const CardDoubleSided = (props) => {
    return (
        <div style={{height: `${props.height}rem`}} className={`Card__double-sided `}>
            <div className={`Card__double-sided__side Card__double-sided__side--front Card--${props.frontModifier}`}>
                {props.enableIcon ? <img className="icon" src={props.iconURL}/> : null}
                <h5>{props.frontHeadline}</h5>
                <h6>{props.frontSubHeadline}</h6>
                <p>{props.bodyText}</p>
            </div>
            <div className={`Card__double-sided__side Card__double-sided__side--back Card--${props.backModifier}`}>
                <h5>{props.backHeadline}</h5>
                <h6>{props.backSubHeadline}</h6>
                {props.buttonEnabled? <ButtonReadMore text={props.buttonText} url={props.buttonURL}/> : null }
            </div>
        </div>
    );
};

export default CardDoubleSided;