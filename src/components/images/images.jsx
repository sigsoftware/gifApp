import React from 'react';
import "./images.css";
import "animate.css";
import PropTypes from "prop-types";

const Images = (props) => {
    return (
        <>
            <h2>Resultados para <b>{String(props?.term).toLocaleUpperCase()}</b></h2>
            <ul className='gridImages animate__animated animate__bounceInUp'>{props.children}</ul>
        </>
    )
}

Images.defaultProps = {
    term: "",
}

Images.propTypes = {
    term: PropTypes.string.isRequired,
}

export { Images };