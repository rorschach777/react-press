import React from 'react';
import Container from '../Container';
import Column from '../Column';
import * as stringResources from '../../string-resources/string-resources';
import SectionHeadline from '../SectionHeadline';
import SectionBody from './SectionBody';

const ThreeColumnEvenSection = () => {
    return (
        <SectionBody>
            <Container>
                <Column modifier={'1-of-3'}>
                    Left Content
                </Column>
                <Column modifier={'1-of-3'}>
                    Middle Content
                </Column>
                <Column modifier={'1-of-3'}>
                    Right Content
                </Column>
            </Container>
        </SectionBody>
    );
};

export default ThreeColumnEvenSection;