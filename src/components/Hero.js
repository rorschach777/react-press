
import React from 'react';
import { Button } from 'antd';
const Hero = (props) => {
    let backgroundImageURL; 
    const content = ()=>{
        let data = props.setComponentData("hero");
        backgroundImageURL = data.background_image_url;
        console.log(backgroundImageURL)
        return (
            <div className="Hero__inner" style={{backgroundImage: `url(${backgroundImageURL})`}}>
                <div className="Hero__inner__content" >
                    <h1> {data.main_headline}</h1>
                    <h2>{data.sub_headline}</h2>
                    <Button type="primary">{data.call_to_action_text}</Button>
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