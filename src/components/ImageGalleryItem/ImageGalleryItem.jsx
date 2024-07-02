import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.handleOpenModal}>
          <img
            className={css.imageGalleryItemImage}
            src={webformatURL}
            alt={tags}
          />
        </li>
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          handleCloseModal={this.handleCloseModal}
          isOpen={this.state.showModal}
        />
      </>
    );
  }
}

export default ImageGalleryItem;
