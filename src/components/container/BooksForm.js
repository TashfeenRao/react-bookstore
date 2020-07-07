import React from 'react';

export default function BooksForm() {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
    <div className="booksForm">
      <h2>BooksForm</h2>

      <form>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category">
          {categories.map(cat => (
            <option>{cat}</option>
          ))}
        </select>
        <button type="button">Add Book</button>

      </form>
    </div>
  );
}
