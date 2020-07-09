import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../../actions/index';
import categories from './categories';
import '../../styles/bookForm.css';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ID: Math.floor(Math.random() * 1000),
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    this.reset();
  }

  reset() {
    this.setState({
      ID: Math.floor(Math.random() * 1000),
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (

      <div className="booksForm">
        <h2 className="new-book">BooksForm</h2>

        <form onSubmit={this.handleSubmit} className="book-form">
          <input className="book-input" type="text" placeholder="Title" name="title" onChange={this.handleChange} value={title} required />
          <select name="category" onChange={this.handleChange} value={category} className="custom-select">
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit" className="btn add-btn">Add Book</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(Actions.createBook(book));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
