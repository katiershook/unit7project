import React from 'react';
import {NavLink} from 'react-router-dom';

// imports NavLink for being active when the props match the current location.


// navigation links on load

const Nav = (props) =>{
   
    return(
        <div>
    
        
        <nav className ="main-nav">
        
      
   
        <ul> 
    
            {/* <li><NavLink exact to='/' > Home </NavLink></li> */}
         <li><NavLink to="/theoffice" onClick={() => props.onSearch("dwight schrute")}>The Office </NavLink></li>

         <li><NavLink to="/pizza" onClick={() => props.onSearch("Pizza")}>Pizza</NavLink></li>
         <li><NavLink to="/pitbulls" onClick={() => props.onSearch("Pibble")}> Pitbulls </NavLink></li>
         
            
        </ul>
    </nav>
    </div>

)
}
 export default Nav;