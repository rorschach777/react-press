import React from 'react';

const SectionHeadline = (props) => {
    return (
        <h5 className="SectionSubheadline" style={{textAlign: `${props.align}`}}>{props.text}</h5>
    );
};

export default SectionHeadline;