import React, { Component } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css'

export class Loader extends Component {
  render() {
      return (
        <div className={css.loader}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="white"
            color="#3f51b5"
          />
        </div>
      );
  }
}

export default Loader
