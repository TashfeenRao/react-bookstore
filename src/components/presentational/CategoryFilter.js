/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default function CategoryFilter(props) {
  const { changeFilter } = props;

  return (
    <div className="categoryFilter">
      <h2>Filter by Category</h2>
      <select className="custom-select" name="catFilter" onChange={e => changeFilter(e)}>
        {
          categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))
        }
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
