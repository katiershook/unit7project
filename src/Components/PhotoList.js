import React from 'react'
import Photo from "./Photo"
import NotFound from "./NotFound"
import App from "../App";


const PhotoList = props => {
    const results = props.title
    console.log(props.title)
    let photos; 
    console.log(results)
    if(results.length){
    let  photos = results.map(photo => 
        <Photo url ={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } key ={photo.id} />);
        return(
            <div className="pic-holder">
                <ul className="pic-list">
            {photos}
                </ul>
            </div>
        )
    
    } else {
        return(
     < NotFound />
        )
        
}
}
export default PhotoList; 