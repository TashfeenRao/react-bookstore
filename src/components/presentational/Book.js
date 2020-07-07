import React from 'react';
import BooksList from '../container/BooksList';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired
}