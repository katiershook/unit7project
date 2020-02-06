import React from 'react';



  // interpolates data to the im src
  const Photo = props => {

     const id = props.data.id; 
      const secret = props.data.secret;  
      const server = props.data.server;  
      const farm = props.data.farm;

    return (  
    <li>     
     <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />  
     </li>
    );
  }
  
  export default Photo;
