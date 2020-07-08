import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../presentational/Book';

const BooksList = ({ books }) => (

  // const handleRemoveBook = (book) => {

  // }
  <div className="booksList">
    <h2>Books List</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.ID} book={book} />
        ))}

      </tbody>

    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};
