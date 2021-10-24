import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

function Searchbar({onSubmit}) {
  
const [imgName, setImgName] = useState('');
  

 const handleNameChange = event => {
  setImgName(event.currentTarget.value.toLowerCase());
  };

 const handleSubmit = event => {
    event.preventDefault();

    if (imgName.trim() === '') {
      toast.error('Введите название картинки.');
      return;
    }
    onSubmit(imgName);
    setImgName('');
  };

  
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
            name="imgName"
            value={imgName}
            onChange={handleNameChange}
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
