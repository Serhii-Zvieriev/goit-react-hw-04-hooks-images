import { useState, useEffect } from 'react';

import './App.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import api from './services/pixabayAPI';

function App() {
  const [searchImg, setSearchImg] = useState('');
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [modalImg, setModalImg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (searchImg && currentPage) {
      api(searchImg, currentPage)
        .then(img => {
          setImg(prevImgArr => [...prevImgArr, ...img.hits]);

          if (currentPage !== 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        })
        .catch(error => console.log({ error }))
        .finally(() => setLoading(false));
    }
  }, [currentPage, searchImg]);

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target[1];

    if (value.trim() === '') {
      alert('Введите искомую картинку.');
      return;
    }

    setSearchImg(value.toLowerCase());
    setLoading(true);
    setCurrentPage(1);
    setImg([]);
  };

  const handleLoadeMore = () => {
    setLoading(true);
    setCurrentPage(prevPage => prevPage + 1);
  };

  const hendelOpenModal = e => {
    setIsModalOpen(true);
    setModalImg(e.target.dataset.source);
  };

  const hendelCloseModal = () => {
    setIsModalOpen(false);
    setModalImg('');
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {img && <ImageGallery imgArr={img} onOpen={hendelOpenModal} />}
      {isModalOpen && (
        <Modal modalImg={modalImg} modalClose={hendelCloseModal} />
      )}
      {loading && <Loader />}
      {currentPage && <Button onClick={handleLoadeMore} />}
    </>
  );
}

export default App;
