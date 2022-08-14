import React from 'react'
import "./image.css";
import PropTypes from "prop-types";

const Image = ({ image }) => {
    return (
        <>
            <img src={image?.imageUrl} className="image" alt={image?.title} />
        </>
    )
}

Image.proTypes = {
    image: PropTypes.object.isRequired,
}

Image.defaultProps = {
    image: {},
}

export { Image };

