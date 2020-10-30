
import React from 'react';
import NavigationLink from './NavigationLink';
import {CONFIG} from '../config/Config';
import {formatNavLink} from '../utilities/utilities';
const Hero = (props) => {
    let backgroundImageURL; 
    let data = props.setComponentData("hero");
    const content = ()=>{
  
        backgroundImageURL = data.background_image_url;
        console.log(backgroundImageURL)
        const renderNavLink = () => {
            let formattedNavLink = formatNavLink(data.call_to_action_redirect);
            if (data.call_to_action_enabled){
               return(
                <NavigationLink 
                href={formattedNavLink}
                buttonModifier={'primary'}
                setCurrentRoute={props.setCurrentRoute}
                >
                    {data.call_to_action_text}
                </NavigationLink>
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
        <div className="Hero" style={{minHeight: `${data.hero_height}rem`}}>
           { props.currentPage != null ? content(data) : "loading" }
        </div>
    );
};
export default Hero;