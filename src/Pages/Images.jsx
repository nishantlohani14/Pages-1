// src/pages/Images.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ImagesPage = () => {
  const [bulbOn, setBulbOn] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    socket.on('toggleBulb', () => {
      setBulbOn(prev => !prev);
    });

    socket.on('toggleCurtain', () => {
      setCurtainOpen(prev => !prev);
    });

    return () => {
      socket.off('toggleBulb');
      socket.off('toggleCurtain');
    };
  }, []);

  return (
    <div>
      <h1>Images Page</h1>
      <img src={bulbOn ? "/bulb-on.png" : "/bulb-off.png"} alt="Bulb" />
      <img src={curtainOpen ? "/curtain-open.png" : "/curtain-off.png"} alt="Curtain" />
      <Link to="/button">Go to Buttons Page</Link>
    </div>
  );
};

export default ImagesPage;
