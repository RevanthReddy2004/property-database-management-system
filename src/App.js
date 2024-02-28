import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import GuestSignupPage from './pages/GuestSignupPage';
import GuestSigninPage from './pages/GuestSigninPage';
import DashboardPage from './pages/DashboardPage';
import GuestNavbar from './components/GuestNavbar';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import BookingsPage from './pages/BookingsPage';
import Home from './pages/homepage';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('guestToken'));

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    // Save the guest name to state
    sessionStorage.setItem('guestName', name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <GuestNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/signup" element={<GuestSignupPage handleLogin={handleLogin} />} />
          <Route path="/signin" element={<GuestSigninPage handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/property/:property_id" element={<PropertyDetailsPage/>} />
          {/* Add other guest management routes here */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
