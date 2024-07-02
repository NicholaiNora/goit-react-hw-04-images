// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { getAPI } from 'API';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import css from './App.module.css';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const newSearch = e.target.search.value.trim().toLowerCase();

    if (newSearch !== search) {
      setSearch(newSearch);
      setPage(1);
      setImages([]);
    }
  };

  useEffect(() => {
      if (search === '') return;

      (async () => {
        await fetchImages(search, page);
      })();

  }, [search, page]);

  const fetchImages = async (search, page) => {
    try {
      setIsLoading(true);
      const fetchedImages = await getAPI(search, page);
      console.log(fetchedImages);

      const { hits, totalHits } = fetchedImages;

      if (hits.length === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      if (page === 1) {
        toast.success(`Hooray! We found ${totalHits} images!`);
      }

      if (page * 12 >= totalHits) {
        setIsEnd(true);
      }

      setImages(prevImages => [...prevImages, ...hits]);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {images.length >= 1 && <ImageGallery images={images} />}
      {images.length >= 1 && !isEnd && <Button handleClick={handleClick} />}

      {isError && toast.error('Oops, something went wrong! Reload this page!')}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

// export class App extends Component {
//   state = {
//     search: '',
//     page: 1,
//     images: [],
//     isLoading: false,
//     isEnd: false,
//     isError: false,
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const newSearch = e.target.search.value.trim().toLowerCase();

//     if (newSearch !== this.state.search) {
//       this.setState({ search: newSearch, page: 1, images: [] });
//     }
//   };

//   componentDidUpdate = async (_prevProps, prevState) => {
//     const { search, page } = this.state;

//     if (prevState.search !== search || prevState.page !== page) {
//       await this.fetchImages(search, page);
//     }
//   };

//   fetchImages = async (search, page) => {
//     try {
//       this.setState({ isLoading: true });
//       const fetchedImages = await getAPI(search, page);
//       console.log(fetchedImages);

//       const { hits, totalHits } = fetchedImages;

//       if (hits.length === 0) {
//         toast.error(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         return;
//       }

//       if (page === 1) {
//         toast.success(`Hooray! We found ${totalHits} images!`);
//       }

//       if (page * 12 >= totalHits) {
//         this.setState({ isEnd: true });
//       }

//       this.setState(prevState => ({ images: [...prevState.images, ...hits] }));
//     } catch (e) {
//       this.setState({ isError: true });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   handleClick = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, isLoading, isEnd, isError } = this.state;
//     return (
//       (
//         <div className={css.app}>
//           <Searchbar handleSubmit={this.handleSubmit} />
//           {isLoading && <Loader />}
//           {images.length >= 1 && <ImageGallery images={images} />}
//           {images.length >= 1 && !isEnd && (
//             <Button handleClick={this.handleClick} />
//           )}

//           {isError &&
//             toast.error('Oops, something went wrong! Reload this page!')}
//           <Toaster position="top-right" reverseOrder={false} />
//         </div>
//       )
//     );
//   }
// }

// export default App;
