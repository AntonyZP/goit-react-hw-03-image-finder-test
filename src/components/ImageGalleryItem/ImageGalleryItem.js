import React from "react";
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({smallImage, largeImage, onClickImage}) => {
    return (
      <GalleryItem onClick={()=> onClickImage()}>
        <GalleryImage src={smallImage} alt="small" />
      </GalleryItem>
    )
}

export default ImageGalleryItem;


