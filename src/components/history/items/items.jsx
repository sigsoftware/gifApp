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
    term: "",
}

Items.propTypes = {
    item: PropTypes.any.isRequired,
    term: PropTypes.string.isRequired,
}
