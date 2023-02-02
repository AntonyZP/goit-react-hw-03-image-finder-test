import React from "react";
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({smallImage, largeImage}) => {
    return (
      <GalleryItem className="gallery-item">
        <GalleryImage src={smallImage} alt="small" />
      </GalleryItem>
    )
}

export default ImageGalleryItem;


