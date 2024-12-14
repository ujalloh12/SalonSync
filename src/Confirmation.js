import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get passed state

function Confirmation() {
  const location = useLocation(); // Get the location state passed from AppointmentBooking
  const { service, date, time } = location.state || {}; // Destructure appointment details

  return (
    <div className="confirmation">
      <h2>Appointment Confirmation</h2>
      {service && date && time ? (
        <div>
          <p>Service: {service}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Your appointment has been successfully booked!</p>
        </div>
      ) : (
        <p>No appointment details available.</p>
      )}
    </div>
  );
}

export default Confirmation;
