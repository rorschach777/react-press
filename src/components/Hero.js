
import React from 'react';
import Button from './Button';
import {CONFIG} from '../config/Config';
const Hero = (props) => {
    let backgroundImageURL; 
    const content = ()=>{
        let data = props.setComponentData("hero");
        backgroundImageURL = data.background_image_url;
        console.log(backgroundImageURL)
        const renderNavLink = () => {
            let link = data.call_to_action_redirect;
            let formattedNavLink = link.replace(CONFIG.url.base, '');
            formattedNavLink = formattedNavLink.replace('/','');
          
            if (data.call_to_action_enabled){
               return(
                <Button 
                href={formattedNavLink}
                buttonModifier={'primary'}
                setCurrentRoute={props.setCurrentRoute}
                >
                    {data.call_to_action_text}
                </Button>
               )
             
            }
            else{
                return null;
            }
        }
        return (
            <div className="Hero__inner" style={{backgroundImage: `url(${backgroundImageURL})`}}>
                <div className="Hero__inner__content" >
                    <h1>{data.main_headline}</h1>
                    <h2>{data.sub_headline}</h2>
                    {renderNavLink()}
                </div>
            </div>
        )
    }
    return (
        <div className="Hero">
           { props.currentPage != null ? content() : "loading" }
        </div>
    );
};
export default Hero;