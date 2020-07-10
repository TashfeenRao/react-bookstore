/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book, onClick } = props;
  return (
    <div className="book-content">
      <div className="content-left">
        <p className="book-category">{book.category}</p>
        <h1 className="book-title">{book.title}</h1>
      </div>
      <div className="content-right">
        <button className="btn remove-btn" type="button" onClick={() => onClick(book)}>Remove Book</button>
      </div>

    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
