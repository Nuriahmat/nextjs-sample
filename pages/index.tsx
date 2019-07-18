import React from 'react';
import css from '../assets/css/style.css';

const IndexPages = () => {
  return (
    <h1 className={css.test}>
      <a href="/about">About</a><br/>
      Welcome to
      <b> Next.js </b>
      for TypeScript && Postcss!
    </h1>
  );
};

export default IndexPages;
