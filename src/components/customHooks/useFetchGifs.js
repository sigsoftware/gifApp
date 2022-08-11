import { useEffect, useState } from "react";
import { GetImagesBySearchField } from "./../helpers/getImages";

let useFetchGifs = (term) => {

    let [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        GetImagesBySearchField(term).then((results) => {
            setTimeout(() => {
                setState({
                    data: results,
                    loading: false,
                });
            }, 5000);
        });
    }, [term]);

    return state;

}


export { useFetchGifs };
