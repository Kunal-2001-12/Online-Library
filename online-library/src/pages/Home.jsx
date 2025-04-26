import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

const Home = () => {
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Welcome to Online Library 📚</h1>

      {/* Search Bar */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search for books..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h3 className="mt-5 mb-3">Categories:</h3>
      <div className="d-flex flex-wrap gap-3 mb-5">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/books/${category}`}
            className="btn btn-outline-primary"
          >
            {category}
          </Link>
        ))}
      </div>

      <h3 className="mb-4">Popular Books:</h3>
      <div className="row">
        {filteredBooks.slice(0, 6).map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
