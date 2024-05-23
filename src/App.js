// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import ButtonsPage from './Pages/Buttons';
import ImagesPage from './Pages/Images';

function App() {
  return (
    <Router>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<ButtonsPage />} />
          <Route path="/images" element={<ImagesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

