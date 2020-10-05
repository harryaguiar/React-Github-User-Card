import React from 'react';
import axios from "axios";
import Header from "./components/header";
import GitHubCard from "./components/gitHubCard";
import SearchFollowers from "./components/SearchBar";
import Followers from "./components/followers";
import './App.css';


class App extends React.Component {
  constructor(){
    console.log("constructor function running");
    super();
    this.state = {
      data: [],
      // followers: [],
      username: ""
    }
  }
  componentDidMount(){
console.log("CDM running");
axios
  .get(`https://api.github.com/users/adelazalewski`)
  .then((res) => {
    console.log(res);
    this.setState({...this.state, data: res.data});
    //console.log(this.state.data)
  })
  .catch((err) => console.log("api call error: ", err))
  }
  fetchFollowers = (e) => {
    console.log("fetching followers");
     e.preventDefault();
    axios 
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state,
          data: res.data,
          username:""
        })
      })
      .catch((err) => console.log(err))
    
  }
  changeHandler = (e) => {
    this.setState({...this.state,
      username: e.target.value
    });
    //console.log("haha")
}
  
  render(){
    console.log("render function running");
    return (
      <div className="App">
        <Header  />
        <SearchFollowers  fetchFollowers={this.fetchFollowers} username={this.state.username} changeHandler={this.changeHandler}/>
        <GitHubCard  data={this.state.data}/>
        {/* <Followers /> */}
        
      </div>
    );
  }
  
}

export default App;
