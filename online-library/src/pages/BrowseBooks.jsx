import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Browse Books</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <>
            <p>No books found. Showing all available books:</p>
            {books.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
