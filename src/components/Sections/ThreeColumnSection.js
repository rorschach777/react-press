import React from 'react';
import Container from '../Container';
import Column from '../Column';
import * as stringResources from '../../string-resources/string-resources';
import SectionHeadline from '../SectionHeadline';
import SectionBody from './SectionBody';

const ThreeColumnEvenSection = (props) => {
    const data = props.setComponentData(stringResources.threeColumnSection);
    return (
        <SectionBody>
            <SectionHeadline text={data.headline}/>
            <Container>
                <Column modifier={'1-of-3'}>
                    <h5>{data.left_column_headline}</h5>
                    <p>{data.left_column_text}</p>
                </Column>
                <Column modifier={'1-of-3'}>
                    <h5>{data.center_column_headline}</h5>
                    <p>{data.center_column_text}</p>
                </Column>
                <Column modifier={'1-of-3'}>
                    <h5>{data.right_column_headline}</h5>
                    <p>{data.right_column_text}</p>
                </Column>
            </Container>
        </SectionBody>
    );
};

export default ThreeColumnEvenSection;