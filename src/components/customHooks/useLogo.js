
import { useEffect, useState } from 'react';
import { GetImagesRandom } from "./../helpers/getImages";

let useLogo = () => {
    let [logo, setLogo] = useState({});

    useEffect(() => {
        GetImagesRandom().then((result) => {
            setLogo(result);
        })
    }, [])

    return logo;
}

export { useLogo };
