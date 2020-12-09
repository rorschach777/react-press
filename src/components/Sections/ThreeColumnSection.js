import React from 'react';
import Container from '../Container';
import ContainerMini from '../ContainerMini';
import Column from '../Column';
import * as stringResources from '../../string-resources/string-resources';
import SectionHeadline from '../SectionHeadline';
import SectionSubheadline from '../SectionSubheadline';
import SectionBody from './SectionBody';
import Card from '../Card';
import CardDoubleSided from '../CardDoubleSided';
const ThreeColumnEvenSection = (props) => {
    const data = props.setComponentData(stringResources.threeColumnSection);

    const renderFlexibleContent = (m) => {
        switch(m.acf_fc_layout){
            case "card_basic" : {
                return (
                    <Card
                        enableIcon={m.enable_icon}
                        iconURL={m.icon_url}
                        modifier={m.scheme}
                        headline={m.headline}
                        subHeadline={m.sub_headline}
                        bodyText={m.body_text}
                        enableButton={m.enable_button}
                        buttonText={m.button_text}
                        buttonURL={m.button_url}
                        height={m.height}
                    />
                )
            }
            break;
            case "card_double_sided" : {
                return (
                    <CardDoubleSided
                        enableIcon={m.enable_icon}
                        iconURL={m.icon_url}
                        frontHeadline={m.front_headline}
                        frontSubHeadline={m.front_sub_headline}
                        frontModifier={m.front_scheme}
                        backHeadline={m.back_headline}
                        backSubHeadline={m.back_sub_headline}
                        backModifier={m.back_scheme}
                        bodyText={m.body_text}
                        height={m.height}
                        buttonEnabled={m.enable_button}
                        buttonText={m.button_text}
                        buttonURL={m.button_url}
                    />
                )
            }
            break;
            default : {
                return (
                    <CardDoubleSided
                        headline={m.headline}
                        subHeadline={m.sub_headline}
                    />
                );
            }
        }
    }

    return (
        <SectionBody>
            <Container >
                <SectionHeadline text={data.headline} align="center"/>
                <SectionSubheadline text={data.sub_headline} align="center"/>
                <Column modifier={'1-of-3'}>
                    <h5>{data.left_column_headline}</h5>
                    {renderFlexibleContent(data.left_column_module[0])}
                    <div className="u-text-left">
                        <p>{data.left_column_text}</p>
                    </div>
                </Column>
                <Column modifier={'1-of-3'}>
                    <h5>{data.center_column_headline}</h5>
                    {renderFlexibleContent(data.center_column_module[0])}
                    <div className="u-text-left">
                        <p>{data.center_column_text}</p>
                    </div>
                </Column>
                <Column modifier={'1-of-3'}>
                    <h5>{data.right_column_headline}</h5>
                    {renderFlexibleContent(data.right_column_module[0])}
                    <div className="u-text-left">
                        <p>{data.right_column_text}</p>
                    </div>
                </Column>
            </Container>
        </SectionBody>
    );
};

export default ThreeColumnEvenSection;