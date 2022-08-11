import React from 'react'
import "./history.css";

let History = (props) => {
    return (
        <>
            <ol>{props.children}</ol>
        </>
    )
}

export { History };
