import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../presentational/Book';
import Actions from '../../actions/index';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { deleteBook } = this.props;
    deleteBook(book);
  }

  render() {
    const { books } = this.props;
    return (
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
              <Book key={book.ID} book={book} handleRemoveBook={this.handleRemoveBook} />
            ))}

          </tbody>

        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(Actions.removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  deleteBook: PropTypes.func.isRequired,
};
