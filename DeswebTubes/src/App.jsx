// app.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import About from './pages/about';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
