// imports the needed components
import React from "react"
import Nav from "./Nav"
import SearchForm from "./SearchForm"


// creates the header component and renders the search and  nav components. The H1 is in a div and above the search to make sure it displays that way
const Header = (props) => {

    return (
        <div>
            <h1> Search</h1>
        <div>
            <  SearchForm onSearch={props.onSearch} />
        </div> 
        
        <div>
            < Nav onSearch={props.onSearch} />
        </div>
  
  
    
     </div>
    )
}

export default Header;