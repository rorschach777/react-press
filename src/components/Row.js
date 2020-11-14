import React from 'react';

const Row = (props) => {
    return (
        <div className={`Row ${props.modifier !=null ? `Row--${props.modifier}` : null}` }>
            {props.children}
        </div>
    );
};

export default Row;