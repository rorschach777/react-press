import React from 'react';
import Card from '../Card';
import CardDoubleSided from '../CardDoubleSided';

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
                    buttonEnabled={m.enable_button}
                    buttonText={m.button_text}
                    buttonURL={m.button_url}
                    subHeadline={m.sub_headline}
                />
            );
        }
    }
}

const FlexibleContent = (props) => {
    return renderFlexibleContent(props.module);
};

export default FlexibleContent;