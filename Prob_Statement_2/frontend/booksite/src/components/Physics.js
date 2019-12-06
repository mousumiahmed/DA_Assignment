import React from "react";
import axios from "axios";
import styles from "./App.css";


export default class Physics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phyLists:[]

        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/lists`)
          .then(res => {
           console.log(res.data);
            this.setState({
                phyLists:res.data
                 });
          })
         // console.log(this.state.phyLists);
      }
render(){
   // console.log(this.state.phyLists);
    return(
        <React.Fragment>
           <div className = "container">
                <div className = "row">    
                {this.state.phyLists.map((value,index) => {
                    //console.log(value.subject);
                    if(value.subject==="Physics"){
                        return(
                            <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                                 <div className="card" style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                        <div className="card-body">
                                            <h6 className="card-title text-primary text-center">{value.chapter}</h6>
                                            <hr></hr>
                                             {
                                                value.topics.map((entry)=>{
                                                    return(
                                                        <ul><li style={{fontSize:"10px"}}>{entry}</li></ul>
                                                       )                                    
                                                   })
                                            }
                                        </div>
                                    </div>
                            </div>
                        )                       
                    }
               })}
            </div>
        </div>           
    </React.Fragment>
    )
}
}