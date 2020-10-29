import React from 'react';
import Row from './Row';
const Container = (props) => {
    return (
        <div className="Container">
            <Row>
                {props.children}
            </Row>
        </div>
    );
};

export default Container;