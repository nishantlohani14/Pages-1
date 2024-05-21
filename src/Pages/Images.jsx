import React from 'react';
import { Link } from 'react-router-dom';

const ImagesPage = ({ bulbOn, curtainOpen }) => {
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