import React from 'react';

const SectionBody = (props) => {
    return (
        <section  
        style={{backgroundImage:  `url(${props.backgroundImageUrl})`}}  
        className={`Section Section--overlay-${props.includeOverlay ? props.overlayColor : null } ${props.modifier}`}
        >
            {props.children}
        </section>
    );
};

export default SectionBody;