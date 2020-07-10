import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../presentational/Book';
import Actions from '../../actions/index';
import CategoryFilter from '../presentational/CategoryFilter';
import '../../styles/booklist.css';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { deleteBook } = this.props;
    deleteBook(book);
  }

  handleFilterChange(e) {
    const { filterBook } = this.props;
    filterBook(e.target.value);
  }

  render() {
    const { books, filter } = this.props;
    const filteredBooks = () => ((filter !== 'All') ? books.filter(book => book.category === filter) : books);

    return (
      <div className="booksList">
        <div className="book-filter">
          <CategoryFilter changeFilter={this.handleFilterChange} />
        </div>

        <div className="book-item">
          {filteredBooks().map(book => (
            <Book key={book.ID} book={book} onClick={this.handleRemoveBook} />
          ))}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filters,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(Actions.removeBook(book));
  },

  filterBook: category => {
    dispatch(Actions.changeFilter(category));
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
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
