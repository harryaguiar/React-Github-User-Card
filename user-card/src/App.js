import React from 'react';
import axios from "axios";
import Header from "./components/header";
import GitHubCard from "./components/gitHubCard";
import './App.css';

class App extends React.Component {
  constructor(){
    console.log("constructor function running");
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
console.log("CDM running");
axios
  .get(`https://api.github.com/users/adelazalewski`)
  .then((res) => {
    //console.log(res);
    this.setState({...this.state, data: res.data});
    console.log(this.state.data)
  })
  .catch((err) => console.log("api call error: ", err))
  }
  render(){
    console.log("render function running");
    return (
      <div className="App">
        <Header  />
        <GitHubCard data={this.state.data}/>
        
      </div>
    );
  }
  
}

export default App;
