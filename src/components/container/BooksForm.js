import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../reducers/index';
import Actions from '../../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: '',
    }

    this.categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {
    e.preventDefault();
    let formvalues = this.state;
    let name = e.target.name;
    let value = e.target.value;
    formvalues[name] = value;
    this.setState({formvalues});
  }

  handleSubmit = () => {
    this.props.createBook(this.state);
    console.log(this.state);
    console.log(this.props);
    console.log(store.getState())
  }

  render () {

    return (
      <div className="booksForm">
        <h2>BooksForm</h2>
  
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" onChange={this.handleChange} value={this.state.title} required />
          <select name="category" onChange={this.handleChange} value={this.state.category}>
            {this.categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit">Add Book</button>
  
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: (book) => {
      dispatch(Actions.createBook(book))
    }
  }
}

export default connect(null,mapDispatchToProps)(BooksForm);