import react from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({images}) =>{
    return (                                  
        <Gallery>
            {images.map(({id, webformatURL, largeImageURL}) =>(
                <ImageGalleryItem
                key= {id}
                smallImage= {webformatURL}
                largeImage= {largeImageURL}
                />      
            ))}  
        </Gallery>        
    )   
}

export default ImageGallery;

