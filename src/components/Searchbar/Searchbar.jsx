import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { IoSearch } from 'react-icons/io5';

export class Searchbar extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <IoSearch />
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
