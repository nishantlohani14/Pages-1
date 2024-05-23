// src/pages/Buttons.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ButtonsPage = () => {
  const toggleBulb = () => {
    socket.emit('toggleBulb');
  };

  const toggleCurtain = () => {
    socket.emit('toggleCurtain');
  };

  return (
    <div className="buttons-container">
      <h1>Buttons Page</h1>
      <button className="button" onClick={toggleBulb}>Toggle Bulb</button>
      <button className="button" onClick={toggleCurtain}>Toggle Curtain</button>
      <Link className="link" to="/images">Go to Images Page</Link>
    </div>
  );
};

export default ButtonsPage;
