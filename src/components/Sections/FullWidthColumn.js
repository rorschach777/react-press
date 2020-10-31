import React from 'react';

import ContainerFluid from '../ContainerFluid';
import Container from '../Container';
import Column from '../Column';
import * as stringResources from '../../string-resources/string-resources';
import SectionHeadline from '../SectionHeadline';
import SectionBody from './SectionBody';
const FullWidthColumn = (props) => {
    const data = props.setComponentData(stringResources.fullWidthColumn);
    console.log(data);
    return (
        <SectionBody 
        className={`Section`} 
        backgroundImageUrl={data.background_image_enabled ? data.background_image_url : null}
        includeOverlay={data.include_overlay}
        overlayColor={data.overlay_type}
        modifier={'main'}
        >
            <ContainerFluid >
                <Container>
                    <h3>{data.headline}</h3>
                    <h4>{data.sub_headline}</h4>
                    <span>{data.include_overlay}</span>
                </Container>
            </ContainerFluid>
        </SectionBody>

    );
};

export default FullWidthColumn;