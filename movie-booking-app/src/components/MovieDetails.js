import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MovieDetails.css'; // Ensure this file contains the updated styles

const MovieDetails = () => {
  const { state } = useLocation();
  const movie = state?.movie;
  const navigate = useNavigate();

  const handleBookSeat = () => {
    navigate('/book-seat');
  };

  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="movie-details-image" />
      <button className="book-seat-button" onClick={handleBookSeat}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
