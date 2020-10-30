import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Aux from '../../Hoc/Aux';
import Hero from '../../components/Hero';
import { NavLink } from 'react-router-dom';
import HalfColumn from '../../components/Sections/HalfColumn';
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
            // TWO COLUMN LAYOUT EVEN
            case stringResources.twoColumnLayoutEven : 
                return (
                    <HalfColumn
                    setComponentData={props.setComponentData}
                    modifier={'even'}
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