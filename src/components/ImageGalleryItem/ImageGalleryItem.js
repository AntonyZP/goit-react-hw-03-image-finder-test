import React from "react";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, smallImage, largeImage}) => {
    return (
        <li className="gallery-item">
        <img src={smallImage} alt="small" />
      </li>
    )
}

export default ImageGalleryItem;


