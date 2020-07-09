/* eslint-disable react/forbid-prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default function CategoryFilter(props) {
  const { changeFilter } = props;

  return (
    <div className="categoryFilter">
      <h2>Filter by Category</h2>
      <select name="catFilter" onChange={(e) => changeFilter}>
        {
          categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))
        }
      </select>
    </div>
  );
}