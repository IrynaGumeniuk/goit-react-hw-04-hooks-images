import PropTypes from 'prop-types';

function fetchImg(name, page) {
  const key = '21991810-52bb16b7f0c761b580b9c00ed';
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинки с именем ${name}`));
  });
}

fetchImg.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

const api = {
  fetchImg,
};

export default api;
