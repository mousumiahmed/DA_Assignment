import React from "react";
import Routes from "./Routes.js";
import {Link} from "react-router-dom";


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>
                <Routes/>
                <Link to="/"></Link>
            </React.Fragment>
        )
    }
}