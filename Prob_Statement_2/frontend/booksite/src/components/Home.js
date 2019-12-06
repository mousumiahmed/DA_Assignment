import React from "react";
import styles from "./Home.css";
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mathematics from "./Mathematics.js";
import Physics from "./Physics.js";
import Chemistry from "./Chemistry.js";
import SearchChapter from "./SearchChapter.js";
import SearchTopic from "./SearchTopic.js";



export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });         
    }

    render(){
        return(
        <React.Fragment>
            <div className="wrapper">     
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h4 className="text-dark my-3 ">BOOK STORE</h4>
                    </div>
                    <ul class="list-unstyled components">
                        <li>
                            <Link to="/mathematics" className="fa fa-check">Mathematics</Link>
                        </li>
                        <li>
                            <Link to="/physics" className="fa fa-check">Physics</Link>
                        </li>
                        <li>
                            <Link to="/chemistry" className="fa fa-check">Chemistry</Link>
                        </li>
                    </ul>
                </nav>

            <div id="content">
               <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <span><i class="fa fa-align-justify"></i></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/searchChapter" className="nav-link text-white">SearchChapter</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/searchTopic" className="nav-link text-white">SearchTopic</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>

                    <div className="container">
                        <Route path="/mathematics" component={Mathematics}/>
                        <Route path="/physics" component={Physics}/>
                        <Route path="/chemistry" component={Chemistry}/>
                        <Route path="/searchChapter" component={SearchChapter}/>
                        <Route path="/searchTopic" component={SearchTopic}/>                
                    </div>           
                <div>           
            </div>
            </div>
        </div>
    </React.Fragment>
    )
}
}