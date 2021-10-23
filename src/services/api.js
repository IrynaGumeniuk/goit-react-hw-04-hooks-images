import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const apiKey = "23089090-b881069149d08b76d7d8b0f8f";

const fetchImages = (searchQuery, page = 1) => {
    return axios(
        `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    ).then((response) => response.data.hits);
};

export default fetchImages;