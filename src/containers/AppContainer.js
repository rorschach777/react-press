import React, { Component } from 'react';
import Aux from '../Hoc/Aux';
import { CONFIG } from '../config/Config';
import LayoutMain from '../components/Layouts/LayoutMain';
import LoadingScreen from '../components/LoadingScreen';
import { BrowserRouter as Router, Route } from "react-router-dom";
class AppContainer extends Component {
    constructor(props){
        super();
        this.state = {
            drawer : {
                placement : 'top',
                visible : true
            },
            routes: {
                currentRoute: null,
                pageRoutes: []
            },
            page: {
                Title : "",
                currentPage: null,
            },
            data: {
                getDataComplete: false
            }
        }
    }
    showState(){
        console.log(this.state);
    }
    getData(){
        let apiRoute = ["pages", "posts", "menuPrimary"];
        // Get Api Data based on configuration post types. 
        apiRoute.forEach((cur, idx)=>{
            fetch(`${CONFIG.url.base}/${CONFIG.url.apiRoute}/${cur}`)
            // Transform Data to JSON
            .then(d => {
                let obj = d.json();
                return obj;
            })
            .then(d=>{
                let data;
                data = {...d };
                return data;
            })
            // Scan over each post type
            .then(updatedData=>{
                this.setState(prevState=>{
                    let _postTypeData = [];
                    let _allRoutes = [];
                    for(let [key, value] of Object.entries(updatedData)){
                       _postTypeData.push(value);
                    } 
                    // if the post is a page post, we using the slug for the routing. 
                    if (cur === "pages"){
                        _postTypeData.forEach((cur, idx)=>{
                            _allRoutes.push(cur.slug);
                        })
                    }
                    // This creates the data objects in state. 
                    this.setState(prevState=>{
                        return{
                            ...prevState,
                            routes: {
                                ...prevState.routes,
                                pageRoutes: _allRoutes
                            },
                            data: {
                                ...prevState.data,
                                [cur] : _postTypeData
                            }
                        
                        }
                    });
                });
                return updatedData
            })
            // once all data received set as complete, used to trigger loading screen. 
            .then(updatedData=>{
                this.setState(prevState=>{
                    return {
                        ...prevState,
                        data: {
                            ...prevState.data,
                            getDataComplete : true
                        }
                    }
                })
                return updatedData;
            })
            // Set the current page obect, we specify the homepage as default. 
            .then(updatedData=>{
                let _currentRoute = window.location.href;
                let _setRoute;
                _currentRoute = _currentRoute.replace(CONFIG.url.frontend.development, '');
                _currentRoute != "" ? _setRoute = _currentRoute : _setRoute = "home";
                this.setState(prevState=>{
                    return {
                        routes: {
                            ...prevState.routes,
                            currentRoute : _setRoute
                        }
                    }
                }, this.setCurrentPageObject())
                return updatedData;
            })
          
        });
    }
    closeDrawer=()=>{
        console.log('close me')
        this.setState(prevState=>{
            return{
                ...prevState,
                drawer: {
                    ...prevState.drawer,
                    visible: false
                }
            }
        })
    }
    componentDidMount(){
        this.getData();
    }
    shouldComponentUpdate(nextState, nextProps){
        if (nextState != this.state){
            return true;
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // If route changes update the page object
        if (this.state.routes.currentRoute != prevState.routes.currentRoute){
            this.setCurrentPageObject();
        }
    }
    setCurrentPageObject(){
        let _currentPage = null;
        let _state = {...this.state}
        if(this.state.data.pages != null){
            _state.data.pages.forEach((cur,idx)=>{
                if (cur.slug === this.state.routes.currentRoute){
                    _currentPage = {...cur}
                }
             })
        }
       this.setState(prevState=>{
           return {
                ...prevState,
                page: {
                    ...prevState.page,
                    currentPage: _currentPage
                }
            }
       }, this.showState())
    
    }
    // This is used to grab a data object within the current page data. 
    setComponentData = (componentName)=>{
        let components = this.state.page.currentPage.acf_fields.component;
        let dataObject = null
        components.forEach((cur, idx)=>{
            if (cur.acf_fc_layout === componentName){
                dataObject = {...cur};
            }
        });
        return dataObject;
    }
    setCurrentRoute(_currentRoute){
        console.log(_currentRoute)
        this.setState((prevState=>{
            return{
                ...prevState,
                routes:{
                    ...prevState.routes,
                    currentRoute: _currentRoute
                }
            }
        }))
    }
    AppContent =()=>{
        if(this.state.data.getDataComplete && this.state.page.currentPage != null){
            return (
                <LayoutMain 
                state={this.state} 
                closeDrawer={this.closeDrawer}
                components={this.state.page.currentPage.acf_fields.component}
                setComponentData={(componentName)=>this.setComponentData(componentName)}
                setCurrentRoute={(route)=>this.setCurrentRoute(route)}
                test={()=>this.test()}
                />
            );
    
        }
        else{
            return(
                <LoadingScreen/>
            );
        }
    }
    render() {
        return (
            <Aux>
                {this.AppContent()}
            </Aux>
        );
    }
}
export default AppContainer;