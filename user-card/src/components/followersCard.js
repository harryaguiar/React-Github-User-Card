import React from "react";


function FollowersCard (props) {
    return(
        <div className="github-card">
            <div className="image-div">
            <img alt="profile" src={props.data.avatar_url} />
            <p>GitHub Link: <a href={props.data.html_url}>{props.data.login}</a></p>
            </div>
            <div className="user-info">
            <h1>Username: {props.data.login}</h1>
            
            </div>
        </div>
    )
}
export default FollowersCard;