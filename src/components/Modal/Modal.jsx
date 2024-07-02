import React, { Component } from 'react';
import ReactModal from 'react-modal';
import css from './Modal.module.css';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');

export class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };
  render() {
    const { largeImageURL, tags, handleCloseModal, isOpen } = this.props;
    return (
      <ReactModal
        onRequestClose={() => {
          console.log('Close handled');
          handleCloseModal();
        }}
        contentLabel="onRequestClose"
        shouldCloseOnOverlayClick={true}
        isOpen={isOpen}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img src={largeImageURL} alt={tags} />
        <button className={css.closeButton} onClick={handleCloseModal}>
          <MdClose />
        </button>
      </ReactModal>
    );
  }
}

export default Modal;
