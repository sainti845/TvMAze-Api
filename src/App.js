import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowListScreen from './screens/ShowListScreen';
import ShowSummaryScreen from './screens/ShowSummaryScreen';
import BookingScreen from './screens/BookingScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowListScreen />} />
        <Route path="/show/:id" element={<ShowSummaryScreen />} />
        <Route path="/booking/:id" element={<BookingScreen />} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
