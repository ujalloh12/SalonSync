import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

function AppointmentBooking() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBooking = (e) => {
    e.preventDefault();
    // Navigate to the confirmation page with the appointment details
    navigate('/confirmation', { state: { service, date, time } });
  };

  return (
    <div className="appointment-booking">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleBooking}>
        <label>
          Select Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Haircut">Haircut</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Facial">Facial</option>
            <option value="Massage">Massage</option>
          </select>
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
