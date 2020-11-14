import React from 'react';

const SectionHeadline = (props) => {
    return (
        <h3 className="SectionHeadline" style={{textAlign:`${props.align}`}}>{props.text}</h3>
    );
};

export default SectionHeadline;