import React from 'react';
import Container from '../Container';
import Column from '../Column';
import * as stringResources from '../../string-resources/string-resources';
import SectionHeadline from '../SectionHeadline';
import SectionSubheadline from '../SectionSubheadline';
import SectionBody from './SectionBody';
import FlexibleContent from '../FlexibleContent/FlexibleContent';

const FourColumnSection = (props) => {
    const data = props.setComponentData(stringResources.fourColumnSection);
    console.log(data.first_column_module[0])
    return (
        <SectionBody>
            <Container >
                <SectionHeadline text={data.headline} align="center"/>
                <SectionSubheadline text={data.sub_headline} align="center"/>
                <Column modifier={'1-of-4'}>
                    <h5>{data.first_column_headline}</h5>
                    <FlexibleContent module={data.first_column_module[0]}/>
                </Column>
                <Column modifier={'1-of-4'}>
                    <h5>{data.second_column_headline}</h5>
                    <FlexibleContent module={data.second_column_module[0]}/>
                </Column>
                <Column modifier={'1-of-4'}>
                    <h5>{data.third_column_headline}</h5>
                    <FlexibleContent module={data.third_column_module[0]}/>
                </Column>
                <Column modifier={'1-of-4'}>
                    <h5>{data.fourth_column_headline}</h5>
                    <FlexibleContent module={data.fourth_column_module[0]}/>
                </Column>
            </Container>
        </SectionBody>
    );
};

export default FourColumnSection;