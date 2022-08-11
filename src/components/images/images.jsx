import React from 'react';
import "./images.css";
import "animate.css";

const Images = (props) => {
    return (
        <>
            <h2>Resultados para <b>{String(props?.term).toLocaleUpperCase()}</b></h2>
            <ul className='gridImages animate__animated animate__bounceInUp'>{props.children}</ul>
        </>
    )
}

export { Images };