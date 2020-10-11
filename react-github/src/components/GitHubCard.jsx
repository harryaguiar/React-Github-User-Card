import React from "react";


function GitHubCard (props) {
    return(
        <div className="github-card">
            <div className="image-div">
            <img alt="profile" src={props.data.avatar_url} />
            <p>GitHub Link: <a href={props.data.html_url}>{props.data.name}</a></p>
            </div>
            <div className="user-info">
            <h1>{props.data.name}</h1>
            <p>{props.data.bio}</p>
            <p>{props.data.location}</p>
            <p>Followers: {props.data.followers}</p>
            <p>Following: {props.data.following}</p>
            </div>
        </div>
    )
}
export default GitHubCard;