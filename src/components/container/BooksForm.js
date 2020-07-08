import React, { Component } from 'react';

export default class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: null,
      category: null,
    }

    this.categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e) => {
    e.preventDefault();
    let formvalues = this.state;
    let name = e.target.name;
    let value = e.target.value;
    formvalues[name] = value;
    this.setState({formvalues});

  }

  render () {

    return (
      <div className="booksForm">
        <h2>BooksForm</h2>
  
        <form>
          <input type="text" placeholder="Title" name="title" onChange={this.handleChange} required />
          <select name="category" onChange={this.handleChange}>
            {this.categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <button type="button">Add Book</button>
  
        </form>
      </div>
    );
  }
}
