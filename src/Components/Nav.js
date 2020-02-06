import React from 'react';
import {NavLink} from 'react-router-dom';

// imports NavLink for being active when the props match the location.


// navigation links on load

const Nav = () =>{
   
    return(
        <div>
        <nav className ="main-nav">
        <ul> 
            <li><NavLink exact to='/' > Home </NavLink></li> 
            <li><NavLink to="/theoffice">The Office </NavLink></li> 
            <li><NavLink to="/pizza" >Pizza</NavLink></li>
            <li><NavLink to="/pitbulls"> Pitbulls </NavLink></li>
        </ul>
    </nav>
    </div>

)
}
 export default Nav;