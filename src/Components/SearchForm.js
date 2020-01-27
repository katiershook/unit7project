import React, { Component } from 'react'
import  {createBrowserHistory} from 'history'

// imports all the good stuff 
// assigns createBrowserHistory() to a variable globally 
const history = createBrowserHistory()
export default class SearchForm extends Component {
    state = {
        userSearch: ' ',
  
    }
    
// creates the on search function to set the state of the userSearch
    onSearch = e => {
        
        this.setState({
        userSearch: e.target.value
        
        });
    console.log(this.state.userSearch);
    }

// prevents default submission. Sets variable for the seach. Sets  variable for the interpolated search and pushed into the history stack.
handleSubmit = e => {
    e.preventDefault();
     const searched = this.query.value
     this.props.onSearch(this.state.userSearch);
     let newLink = `/search/${searched}`
     history.push(newLink)
// returns the search bar to empty
    e.currentTarget.reset();
}

render() {
    return(
   <form className ="search-form" onSubmit = {this.handleSubmit} >
<div className ="search-bar-div" >


    <input type = "search"  onChange={this.onSearch} name="search" ref={ (input) => this.query = input} />
    <button type="submit" className="search-button">
         <div> <span> <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24%" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg> </span></div>
        </button>

    
</div>
  
   </form>
    );
}
}

// doesnt export here bc its exported at the top.