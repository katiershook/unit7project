import React from 'react'
import Photo from "./Photo"
import NotFound from "./NotFound"

// creates the PhotoList component  and maps over the results and interpolates then shows photos.
const PhotoList = (props) => {
    const results = props.data;
    let photos;
    if(results.length> 0)
    {photos = results.map(photo =><Photo data= {photo} key ={photo.id} />)
        return( 
        <div className ="photo-container">
            <h2> results </h2>
            <ul>{photos}</ul>
        </div>
        ) ; 
    } else {
        photos= < NotFound />;
    return (
        <div className ="photo-container "> 
        <ul> {photos} </ul>
        </div>
    );
        
}
};
export default PhotoList; 