import React from 'react';



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

export default Photo;