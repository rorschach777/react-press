import React from 'react';
import ModalBackground from './ModalBackground';
import Spinner from './Spinner';

const LoadingScreen = (props) => {
    return (
        <ModalBackground>
            <div className="LoadingScreen">
                <div>
                    <h6>LOADING</h6>
                </div>
                <Spinner/>
            </div>
        </ModalBackground>
    );
};
export default LoadingScreen;