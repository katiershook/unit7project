import React from "react"
import Nav from "./Nav"
import SearchForm from "./SearchForm"


const Header = (props) => {
    // console.log(props, "hello")
    return (
        <div>
            <h1> Search</h1>
        <div>
            < SearchForm onSearch={props.onSearch} />
        </div> 
        
        <div>
            < Nav />
        </div>
  
        </div>
    )
}

export default Header;