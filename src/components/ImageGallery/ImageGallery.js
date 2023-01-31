import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';



const ImageGallery = ({images}) => {
    return (
        <ul className="gallery">
            {images.map(({id, webformatURL, largeImageURL}) =>(
                <ImageGalleryItem
                key= {id}
                id = {id}
                smallImage= {webformatURL}
                largeImage= {largeImageURL}
                />      
            ))}      
        </ul>
    )
}

  
  export default ImageGallery;

