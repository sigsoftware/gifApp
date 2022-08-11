import React from 'react';
import "./items.css";
import PropTypes from "prop-types";

export const Items = ({ item, term, setTerm }) => {
    return (
        <>
            <li className='item' onClick={() => setTerm(String(item))}><button>{item}</button></li>
        </>
    )
}

Items.defaultProps = {
    item: [{}],
}

Items.propTypes = {
    item: PropTypes.any.isRequired,
}
