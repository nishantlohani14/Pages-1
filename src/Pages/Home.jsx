// import React from "react";
// import QRCodeComponent from "../components/QRcode";

// const Home = () => {
//   return (
//     <>
//       < QRCodeComponent/>
//     </>    
//   );
// };

// export default Home;


import React, { useState } from "react";
import QRCodeComponent from "../components/QRcode";
import ImagesPage from "./Images";

const Home = () => {
  // State for controlling bulb and curtain
  const [bulbOn, setBulbOn] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  // Function to toggle bulb state
  const toggleBulb = () => {
    setBulbOn((prevBulbOn) => !prevBulbOn);
  };

  // Function to toggle curtain state
  const toggleCurtain = () => {
    setCurtainOpen((prevCurtainOpen) => !prevCurtainOpen);
  };

  return (
    <>
      <QRCodeComponent />
      {/* Pass state values and toggle functions to ImagesPage */}
      <ImagesPage bulbOn={bulbOn} curtainOpen={curtainOpen} />
    </>    
  );
};

export default Home;
