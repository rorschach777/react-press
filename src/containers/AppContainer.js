import React, { Component } from 'react';
import Aux from '../Hoc/Aux';
import { CONFIG } from '../config/Config';
import LayoutMain from '../components/Layouts/LayoutMain';
import { BrowserRouter as Router, Route } from "react-router-dom";
class AppContainer extends Component {
    constructor(props){
        super();
        this.state = {
            routes: {
                currentRoute: null,
                pageRoutes: []
            },
            page: {
                Title : "",
                currentPage: null,
            },
            data: {
                pages: null,
                posts: null,
                menuPrimary: null
            }
        }
    }
    getData(){
        let apiRoute = ["pages", "posts"];
        apiRoute.forEach((cur, idx)=>{
            // Get Api Data based on configuration post types. 
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
                })
            })
        });
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
        if (this.state !== prevState) {
          console.log(this.state);
        }
        if (this.state.data.pages !== prevState.data.pages) {
    
         
            if (this.state.data.pages !== null ){
                this.setCurrentPageObject();
            }
        }
      }
    showState(){
        console.log(this.showState);
    }
    setCurrentPageObject(){
        let _currentPage = null;
        let _state = {...this.state}
        _state.data.pages.forEach((cur,idx)=>{
           if (cur.slug === this.state.routes.currentRoute){
               console.log(`Current page : ${cur.slug}`)
               _currentPage = {...cur}
           }
        })
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
    test(){
        console.log("test");
        this.setState(prevState=>{
            return{
                test: "test123"
            }
        })
    }
    render() {
        return (
            <Aux>
               <LayoutMain 
               state={this.state} 
               setComponentData={(componentName)=>this.setComponentData(componentName)}
               setCurrentRoute={(route)=>this.setCurrentRoute(route)}
               test={()=>this.test()}
               />
        
            </Aux>
        );
    }
}
export default AppContainer;