import React from "react";
import PropTypes from 'prop-types';

const Button = ({onClick, onLoadMoreBtn}) =>{
    return (
        <button type="button" onClick={onClick}
        disabled = {!onLoadMoreBtn}>LoadMore...</button>
    )
}

export default Button;

