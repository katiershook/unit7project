import React from 'react'
import Photo from "./Photo"
import NotFound from "./NotFound"
// import App from "../App"
// imports all the good stuff

// creates the PhotoList component
const PhotoList = props => {
    const results = props.title
    
    // if else statement that uses whatever is returned from the search and maps over the results to display them. Uses the flikr url and interpolation. 
    if(results.length){
    let  photos = results.map(photo => 
        <Photo url ={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } key ={photo.id} />);
        return(
            <div className="photo-container">
                <ul className="pic-list">
            {photos}
            
                </ul>
            </div>
        )
    // renders the not found component if nothing matches the search
    } else {
        
        return(
     < NotFound />
        )
        
}
}
export default PhotoList; 