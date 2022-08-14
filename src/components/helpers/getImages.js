import PropTypes from "prop-types";

let params = {
    url: "https://api.giphy.com/v1/gifs",
    api_key: "kFuWx440oFhX4jiCoTe7jIWIth4bG89r",
    lang: "es",
    limit: 20,
    offset: 0,
    rating: "r",
    tag: "anime",
};

let GetImagesBySearchField = async (term) => {
    let resp = await fetch(`${params.url}/search?api_key=${params.api_key}&q=${term}&limit=${params.limit}&offset=${params.offset}&rating=${params.rating}&lang=${params.lang}`);
    let { data } = await resp.json();
    let dataAPI = Array.from(data);
    return dataAPI.map((imageData) => {
        return {
            id: imageData?.id,
            title: imageData?.title,
            url: imageData?.url,
            date: imageData?.import_datetime,
            imageUrl: imageData.images?.original.url,
            rating: imageData?.rating,
            type: imageData?.type,
        }
    })
}

let GetImagesRandom = async () => {
    let resp = await fetch(`${params.url}/random?api_key=${params.api_key}&tag=${params.tag}`);
    let { data } = await resp.json();
    return {
        id: data?.id,
        imageUrl: data?.images.original.url,
        rating: data?.rating,
        title: data?.title,
    }
}

GetImagesBySearchField.defaultProps = {
    term: "aerith",
}

GetImagesBySearchField.propTypes = {
    term: PropTypes.string.isRequired,
}

export { GetImagesBySearchField, GetImagesRandom };