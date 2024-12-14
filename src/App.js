import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';

// Importing components
import UserProfile from './UserProfile';
import AppointmentBooking from './AppointmentBooking';
import ServiceMenu from './ServiceMenu';
import LoyaltyProgram from './LoyaltyProgram';
import Confirmation from './Confirmation'; 
import headerImage from './salon.jpg'; 

function App() {
  return (
    <Router> {/* Wrap the application with Router */}
      <div className="App">
      <header className="App-header">
          <h1>Welcome to SalonSync</h1>
          <p>Your all-in-one destination for beauty, grooming, and wellness.</p>
        </header>

        <main>
          <Routes>
            {/* Define the routes for each page */}
            <Route path="/" element={<UserProfile />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/services" element={<ServiceMenu />} />
            <Route path="/loyalty" element={<LoyaltyProgram />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 SalonSync - All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

