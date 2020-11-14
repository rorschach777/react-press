import React from 'react';
import ModalBackground from './ModalBackground';
import Logo from './Logo';
import Spinner from './Spinner';

const LoadingScreen = (props) => {
    return (
        <ModalBackground>
            <div className="LoadingScreen">
                <div className="logo-holder">
                    <Logo/>
                </div>
                <Spinner/>
            </div>
        </ModalBackground>
    );
};
export default LoadingScreen;