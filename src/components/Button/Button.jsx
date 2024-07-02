import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const { handleClick } = this.props;
    return (
      <button onClick={handleClick} className={css.Button}>
        Load More
      </button>
    );
  }
}

export default Button;
