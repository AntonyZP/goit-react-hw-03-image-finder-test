import react from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({images, onClickImage}) =>{
    return (                                  
        <Gallery>
            {images.map(({id, webformatURL, largeImageURL}) =>(
                <ImageGalleryItem
                key= {id}
                smallImage= {webformatURL}
                largeImage= {largeImageURL}
                onClickImage= {onClickImage}
                />      
            ))}  
        </Gallery>        
    )   
}

export default ImageGallery;

