
import React from "react";
import axios from "axios";
import FollowersCard from "./followersCard";

class Followers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        console.log("Followers CDM");
        axios
        .get("https://api.github.com/users/adelazalewski/followers")
        .then((res) => {
            console.log(res);
            this.setState({data: res.data})
            //console.log(this.data);
        })
        .catch((err) => console.log("Followers API error: ", err))
    }
    
    render(){
        return(
            <div>
                <header className="followers">My GitHub Friends</header>
                {this.state.data.map((follower) => {
                    return <FollowersCard key={follower.id} data={follower} />
                })}
            </div>
             
        )
    }
}
export default Followers;