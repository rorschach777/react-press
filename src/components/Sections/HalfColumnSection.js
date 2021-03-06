import React from 'react';
import Container from '../Container';
import Column from '../Column';
import * as stringResources from '../../string-resources/string-resources';
import SectionHeadline from '../SectionHeadline';
import SectionSubheadline from '../SectionSubheadline';
import SectionBody from './SectionBody';

const HalfColumn = (props) => {
    const data = props.setComponentData(stringResources.twoColumnEven);
    return (
        <SectionBody modifier={`HalfColumn HalfColumn--${props.modifier}`}>
            <Container>
                <SectionHeadline text={data.section_headline} align="center"/>
                <SectionSubheadline text={data.section_subheadline} align="center"/>
                <Column modifier="1-of-2">
                    <h4>{data.left_column_headline}</h4>
                    <img src={data.left_column_image_one} />
                    <p>
                        {data.left_column_text_one}
                    </p>
                    <img src={data.left_column_image_two} />
                    <p>
                        {data.left_column_text_two}
                    </p>
                    <img src={data.left_column_image_three} />
                    <p>
                        {data.left_column_text_three}
                    </p>
                </Column>
                <Column modifier="1-of-2">
                    <h4>{data.right_column_headline}</h4>
                    <img src={data.right_column_image_one} />
                    <p>
                        {data.right_column_text_one}
                    </p>
                    <img src={data.right_column_image_two} />
                    <p>
                        {data.right_column_text_two}
                    </p>
                    <img src={data.right_column_image_three} />
                    <p>
                        {data.right_column_text_three}
                    </p>
                </Column>
            </Container>
        </SectionBody>
    );
};

export default HalfColumn;