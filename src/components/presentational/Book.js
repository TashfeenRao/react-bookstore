/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book, handleRemoveBook } = props;
  return (
    <tr>
      <td>{book.ID}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={() => handleRemoveBook(book.ID)}>Remove Book</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
