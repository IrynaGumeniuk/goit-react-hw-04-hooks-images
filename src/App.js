import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import styles from './App.module.css';
import imgApi from './components/Api';
import Button from './components/Button';
import Modal from './components/Modal';
import Load from './components/Loader';

function App() {

  const [imgName, setImgName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImages, setCurrentImages] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {

    if (!imgName) return;

    const fetchImages = async () => {
      loaderToggle();


      return imgApi
        .fetchImg(imgName, page)
        .then(images =>
          setImages(prevState => [...prevState, ...images.hits]
          )
        )
        .finally(() => loaderToggle());

    };
    fetchImages();

  }, [imgName, page])

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: "smooth",
      });
    }, 800);
  };


  const handleSearchbarSubmit = imgName => {
    setImgName(imgName);
    setPage(1);
    setImages([]);
  };

  const OnLoadMore = () => {
    setPage(prev => prev + 1);
    if (imgName) {
      loaderToggle();
      scrollPage();
      loaderToggle();
    }
  };

  const loaderToggle = () => {
    setIsLoading(prev => !prev);
  };

  const onImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    setCurrentImages(e.target.dataset.img);
    toggleModal();
  };

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearchbarSubmit} />
      <ImageGallery images={images} onImgClick={onImgClick} />
      {isLoading && <Load />}
      {images.length > 0 && !isLoading && (
        <Button onBtnClick={OnLoadMore} text={'Load more'} />
      )}
      <ToastContainer autoClose={3000} />

      {openModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={currentImages} alt="Modal" />
        </Modal>
      )}
    </div>
  );
}

export default App;
