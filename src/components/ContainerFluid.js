import React from 'react';
import Row from './Row';
const ContainerFluid = (props) => {
    return (
        <div className="ContainerFluid">
            <Row>
                {props.children}
            </Row>
        </div>
    );
};

export default ContainerFluid;