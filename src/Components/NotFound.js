import React from 'react';
// not found component uses className to reach the HTML 
const NotFound = props => (
  <div>
  <li className='photo-container not-found'>
 <h3>Yikes. We don't have any of those pictures.</h3>
  </li>
  </div>
);


export default NotFound;