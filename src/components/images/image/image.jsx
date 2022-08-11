import React from 'react'
import "./image.css";

const Image = ({ image }) => {
    return (
        <>
            <img src={image?.imageUrl} className="image" alt={image?.title} />
        </>
    )
}

export { Image };