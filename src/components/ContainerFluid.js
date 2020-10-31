import React from 'react';
import Row from './Row';
const ContainerFluid = (props) => {
    return (
        <div className="ContainerFluid">
            {props.children}
        </div>
    );
};

export default ContainerFluid;