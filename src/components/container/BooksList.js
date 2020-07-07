/* eslint-disable import/no-cycle */
import React from 'react';
import Book from '../presentational/Book';
import store from '../../reducers/index';

export default function BooksList() {
  return (
    <div className="booksList">
      <h2>Books List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {store.getState().map(book => (
            <Book key={book.ID} book={book} />
          ))}

        </tbody>

      </table>
    </div>
  );
}
