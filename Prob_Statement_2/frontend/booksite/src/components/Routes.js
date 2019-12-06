import React from "react";
import Home from "./Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class Routes extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>
                <Route path="/"  component={Home} />
            </React.Fragment>
        )
    }
}



