import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'; // Ensure this file contains the updated styles

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (name && email && mobile) {
      navigate('/confirmation', { state: { name, email, mobile } });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input 
            type="tel" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            required 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
