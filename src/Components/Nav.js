import React from 'react';
import {NavLink} from 'react-router-dom';
// imports NavLink for being active when the props match the current location.


// navigation links on load

const Nav = () =>{
   
    return(
        <div>
    
        
        <nav className ="main-nav">
        
      
   
        <ul>
    
            <li><NavLink exact to='/'> Home </NavLink></li>
            <li><NavLink to="/theoffice">The Office </NavLink></li>
            <li><NavLink to="/pizza">pizza</NavLink></li>
            <li><NavLink to="/pitbulls">pitbulls</NavLink></li>
            
        </ul>
    </nav>
    </div>

)
}
 export default Nav;