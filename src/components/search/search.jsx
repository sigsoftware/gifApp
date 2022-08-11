import React from 'react';
import "./search.css";

export let Search = ({ term, setTerm }) => {
    return (<>
        <div className='searchBody'>
            <div className="Card">
                <div className="CardInner">
                    <div className="container">
                        <div className="InputContainer">
                            <input placeholder="Ingrese un nombre" id='searchTerm' name='searchTerm' onChange={(event) => setTerm(event.target?.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
