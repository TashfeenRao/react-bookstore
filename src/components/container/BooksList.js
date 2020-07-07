/* eslint-disable import/no-cycle */
import React from 'react';
import Book from '../presentational/Book';

export default function BooksList() {
  const book = {
    id: 2,
    title: 'Captain America',
    category: 'Movies',
  };

  return (
    <div className="booksList">
      <h2>Books List</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>

        <Book book={book} />
      </table>
    </div>
  );
}
