import PropTypes from 'prop-types';

function fetchImg(searchQuery, page) {
  const apiKey  = '23089090-b881069149d08b76d7d8b0f8f';
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey }&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Not found any pictures with name ${searchQuery}`));
  });
}

fetchImg.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

const api = {
  fetchImg,
};

export default api;
