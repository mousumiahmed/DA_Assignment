import React from "react";
import axios from "axios";
import styles from "./App.css";


export default class SearchChapter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chapter:"",
            lists:[],
            query:""
        }
    }

    Chapter=(e)=>{
        this.setState({
            chapter:e.target.value
        })
    }
    handleKeyUp = event => {
        this.setState({ query: this.ref.value });
      };

    componentDidMount() {
        axios.get(`http://localhost:5000/lists`)
          .then(res => {
           console.log(res.data);
            this.setState({
                lists:res.data
                 });
          })
         // console.log(this.state.lists);
      }
      onSubmit=(e)=> {
        e.preventDefault();
        let chapter=this.state.chapter
        this.setState({
            chapter:chapter

        });
      }
      render(){
          //console.log(this.state.chapter)
          //console.log(this.state.lists);
          return(
              <React.Fragment>
                <div className="jumbotron">
                    <form
                        onChange={this.onSubmit}
                        className="text-center"
                    >
                        {/* <input type="text" name="chapter" value={this.state.chapter} placeholder="Enter chapter Name" onChange={this.Chapter}/> */}
                        <input type="text" name="chapter" onKeyUp={this.handleKeyUp}
            ref={ref => (this.ref = ref)}
            id="editor"
          />
                        
                    </form>
              </div>
              <div className = "container">
                <div className = "row">    
                {this.state.lists.map((value,index) => {
                    //console.log(value.subject);
                    if(value.chapter===this.state.query){
                        return(
                            <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                                 <div className="card"style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                        <div className="card-body">
                                            <h6 className="card-title text-primary text-center">This chapter includes-</h6>
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