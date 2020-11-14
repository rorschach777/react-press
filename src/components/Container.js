import React from 'react';
import Row from './Row';
const Container = (props) => {
    return (
        <div className={`Container`}>
            <Row modifier={props.modifier}>
                {props.children}
            </Row>
        </div>
    );
};

export default Container;