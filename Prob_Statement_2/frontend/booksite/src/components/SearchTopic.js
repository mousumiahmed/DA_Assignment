import React from "react";
import axios from "axios";


export default class SearchTopic extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phyLists:[],
            topic:""

        }
    }
    Topic=(e)=>{
        this.setState({
            topic:e.target.value
        })
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
                <div className="jumbotron">
                    <form
                        onSubmit={this.onSubmit}
                        className="text-center"
                    >
                      <input type="text" name="topic" value={this.state.topic} placeholder="Enter topic Name" onChange={this.Topic}/>
                    </form>
                </div>
            <div className = "container">
                    <div className = "row">    
                    {this.state.phyLists.map((value,index) => {
                        //console.log(value.topics[0]=="Ionic Bond");
                        if(value.topics.includes(this.state.topic)===true){
                            return(
                                <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                                    <div className="card" style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                            <div className="card-body">
                                                <h6 className="card-title text-primary text-center">{value.chapter}</h6>
                                                
                                                <hr></hr>
                                                <p style={{fontSize:"10px"}}>{this.state.topic}</p>
                                                
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