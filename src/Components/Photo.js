import React from 'react';


// photo component which uses url variable created in the PhotoList component.
const Photo = props => {
  

    return(

  
  <div className="pic-wrapper">
    <li className="pic-wrap">
    <img src={props.url}
     alt= ""  />
    </li>
  </div>



    );
}
// exports component 
export default Photo;