import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Aux from '../../Hoc/Aux';
import Hero from '../../components/Hero';
import { NavLink } from 'react-router-dom';



const LayoutMain = (props) => {
    return (
        <Aux>
            <Header 
            menuPrimary={props.state.data.menuPrimary}
            setCurrentRoute={props.setCurrentRoute}
            /> 
                <main>
                    <Hero 
                    setComponentData={props.setComponentData} 
                    currentPage={ props.state.page.currentPage }
                    setCurrentRoute={props.setCurrentRoute}
                    />
                    <ul>
                        {props.state.routes.pageRoutes.map((cur, idx)=>{
                            return <NavLink exact to={cur} onClick={()=>props.setCurrentRoute(cur)} style={{paddingRight: '10px'}}>{cur}</NavLink>
                        })} 
                    </ul>
                </main>
            <Footer/>
        </Aux>
    );
};
export default LayoutMain;