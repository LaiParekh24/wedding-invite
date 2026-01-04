import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BeachDemo from './pages/BeachDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beach" element={<BeachDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
