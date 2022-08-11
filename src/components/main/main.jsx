import React, { useState } from 'react';
import { Search } from "./../search/search";
import "./main.css";
import { Images } from '../images/images';
import { Image } from '../images/image/image';
import { History } from "./../history/history";
import { Items } from '../history/items/items';
import { useFetchGifs } from "./../customHooks/useFetchGifs";
import load from "./../assets/loading.gif";
import { useLogo } from "./../customHooks/useLogo";
import "animate.css";

const Main = () => {

    let [term, setTerm] = useState("");
    let [categories, setCategories] = useState([]);

    let { data, loading } = useFetchGifs(term);

    let startLogo = useLogo();

    let saveHistory = () => {
        if (term.trim().length >= 3) {
            setCategories([...categories, term.toLocaleUpperCase()]);
        }
    }

    return (
        <>
            <img src={startLogo?.imageUrl} alt={startLogo?.title} className="logo animate__animated animate__bounceIn" />
            <h1 className='title animate_animated animate__fadeInUp'>
                Gif App
            </h1>
            <div className='search'>
                <Search term={term} setTerm={setTerm} />
                <button onClick={saveHistory} className="button">Guardar en Historial</button>
            </div>
            <hr />
            <div className='row'>
                <div className='column1'>
                    <div className='content'>
                        <History>
                            {
                                categories.map((category, idx) => {
                                    return <Items item={category} key={idx} setTerm={setTerm} />
                                })
                            }
                        </History>
                    </div>
                </div>
                <div className='column2'>
                    {
                        (loading && term.trim().length >= 3) && <p><img src={load} alt="loadData" className='loading' /> Cargando Primera Busqueda</p>
                    }
                    {(term.trim().length >= 3 && !loading) ? <Images term={term}>
                        {
                            data.map((image, idx) => {
                                return <Image image={image} key={idx}></Image>
                            })
                        }
                    </Images> : ""}
                </div>
            </div>
        </>
    )
}

export { Main };