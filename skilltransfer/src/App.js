import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Coaching from './pages/Coaching';
import TalentSearch from './pages/TalentSearch';
import Contracting from './pages/Contracting';
import Events from './pages/Events';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/talent-search" element={<TalentSearch />} />
          <Route path="/contracting" element={<Contracting />} />
          <Route path="/events" element={<Events />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
