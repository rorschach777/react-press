import React from 'react';

const ModalBackground = (props) => {
    return (
        <div className="ModalBackground">
                {props.children}
        </div>
    );
};

export default ModalBackground;