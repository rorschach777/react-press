import React from 'react';

const Column = (props) => {
    return (
        <div className={`Column Column--${props.width}`}>
            {props.children}
        </div>
    );
};

export default Column;