import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container mt-5">
        <h2>Book not found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/browse')}>
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <h5 className="card-subtitle mb-3 text-muted">by {book.author}</h5>
          <p className="card-text">{book.description}</p>
          <p className="card-text"><strong>Rating:</strong> {book.rating}</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/browse')}>
            Back to Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
