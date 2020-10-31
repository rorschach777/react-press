import React from 'react';

const SectionHeadline = (props) => {
    return (
        <div>
            <h3 className="SectionHeadline" style={{textAlign: `${props.align}`}}>{props.text}</h3>
        </div>
    );
};

export default SectionHeadline;