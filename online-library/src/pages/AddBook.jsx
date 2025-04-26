import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        tempErrors[field] = 'This field is required';
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({
        id: books.length + 1,
        ...formData,
        rating: parseFloat(formData.rating),
      }));
      navigate('/browse');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <div className="text-danger">{errors.title}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <div className="text-danger">{errors.author}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange}></textarea>
          {errors.description && <div className="text-danger">{errors.description}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input type="number" step="0.1" min="0" max="5" className="form-control" name="rating" value={formData.rating} onChange={handleChange} />
          {errors.rating && <div className="text-danger">{errors.rating}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} />
          {errors.category && <div className="text-danger">{errors.category}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Add Book</button>

      </form>
    </div>
  );
};

export default AddBook;
