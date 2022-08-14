import React from 'react'
import "./history.css";

let History = (props) => {
    return (
        <>
            <ol className="list">{props.children}</ol>
        </>
    )
}

export { History };
