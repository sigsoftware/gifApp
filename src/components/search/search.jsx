import React from 'react';
import "./search.css";

export let Search = ({ term, setTerm }) => {

    let setValue = (event) => {
        () => setTerm(event?.target?.value);
    }

    return (<>
        <div className='searchBody'>
            <div className="Card">
                <div className="CardInner">
                    <div className="container">
                        <div className="InputContainer">
                            <input placeholder="Ingrese un nombre" id='searchTerm' name='searchTerm' onChange={setValue()} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
