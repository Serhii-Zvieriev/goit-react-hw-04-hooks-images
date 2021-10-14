function fetchImages(img, page) {
  const API_KEY = "22998355-c21cb54d4c6e6a9c64822a6a0";

  return fetch(
    `https://pixabay.com/api/?q=${img}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет изображения ${img}`));
  });
}

export default fetchImages;
