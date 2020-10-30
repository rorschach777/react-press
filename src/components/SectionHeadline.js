import React from 'react';

const SectionHeadline = (props) => {
    return (
        <div>
            <h3 style={{textAlign: `${props.align}`}}>{props.text}</h3>
        </div>
    );
};

export default SectionHeadline;