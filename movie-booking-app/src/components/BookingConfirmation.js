import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css'; // Ensure this file contains the updated styles

const BookingConfirmation = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  if (!state) {
    return <div>No booking details available.</div>;
  }

  const { name, email, mobile } = state;

  return (
    <div className="booking-confirmation">
      <h1>Seat Booked Successfully!</h1>
      <p className="booking-info">Booking ID: {bookingId}</p>
      <p className="booking-info">Name: {name}</p>
      <p className="booking-info">Email: {email}</p>
      <p className="booking-info">Mobile: {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
