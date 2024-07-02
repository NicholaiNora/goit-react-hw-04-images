import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import React, { Component } from 'react';
import React from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ images }) {
  return (
    <ul className={css.imageGallery} id="main">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;

// export class ImageGallery extends Component {
//   static propTypes = {
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired
//       })
//     ).isRequired,
//   };

//   render() {
//     const { images } = this.props;
//     return (
//       <ul className={css.imageGallery} id="main">
//         {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//           <ImageGalleryItem
//             key={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             tags={tags}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ImageGallery;
