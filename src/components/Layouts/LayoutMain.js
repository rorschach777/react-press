import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Aux from '../../Hoc/Aux';
import Hero from '../../components/Hero';
import { NavLink } from 'react-router-dom';
import HalfColumnSection from '../Sections/HalfColumnSection';
import ThreeColumnSection from '../Sections/ThreeColumnSection';
import FullWidthSection from '../Sections/FullWidthSection';
import * as stringResources from '../../string-resources/string-resources';
import Meta from '../Meta';
const LayoutMain = (props) => {
    const renderPageComponents = (layout) => {
        switch(layout){
            // HERO
            case "head":
                return(
                    <Meta
                    setComponentData={props.setComponentData} 
                    />
                );
                break;
            case "hero" : 
                return (
                    <Hero 
                    setComponentData={props.setComponentData} 
                    currentPage={ props.state.page.currentPage }
                    setCurrentRoute={props.setCurrentRoute}
                    />
                );
                break;
            // TWO COLUMN SECTION
            case stringResources.twoColumnEven : 
                return (
                    <HalfColumnSection
                    setComponentData={props.setComponentData}
                    modifier={'even'}
                    />
                );
                break;
            // THREE COLUMN SECTION
            case stringResources.threeColumnSection : 
            return (
                <ThreeColumnSection
                setComponentData={props.setComponentData}
                modifier={'even'}
                />
            );
            break;
            // FULL WIDTH Section
            case stringResources.fullWidthSection : 
            return (
                <FullWidthSection
                setComponentData={props.setComponentData}
                modifier={'1-of-1'}
                />
            );
            break;
        }
    }
    return (
        <Aux>
          
            <Header 
            menuPrimary={props.state.data.menuPrimary}
            setCurrentRoute={props.setCurrentRoute}
            /> 
                <main>
                    {
                        props.components.map(c=>{
                            const layout = c.acf_fc_layout;
                            return renderPageComponents(layout)
                        })
                    }
                </main>
            <Footer/>
        </Aux>
    );
};
export default LayoutMain;