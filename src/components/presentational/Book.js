/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book } = props;
  return (
    <tr>
      <td>{book.ID}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
