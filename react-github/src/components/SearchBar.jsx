import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <>
            <form>
                <label htmlFor="username"><h4>Search For Your Followers Here</h4></label>
                <input type="text" name="username" value={this.props.username} onChange={this.props.changeHandler} placeholder="Friend's username" />
                <br />
                <button onClick={this.props.fetchFollowers}>Search</button>
            </form>
            <hr />
            </>
        )
    }
}

export default SearchBar;