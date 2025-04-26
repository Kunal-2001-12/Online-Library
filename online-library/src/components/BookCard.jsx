import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm">
      {book.img && (
        <img
          src={book.img}
          className="card-img-top"
          alt={book.title}
          style={{ height: '300px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text">{book.description.substring(0, 60)}...</p>
        <p className="card-text"><small>Rating: {book.rating}</small></p>
        <Link to={`/book/${book.id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
