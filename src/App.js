import React, {useState} from "react";
import './App.css';
import ButtonsPage from './Pages/Buttons';
import ImagesPage from './Pages/Images';
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";

function App() {

  const [bulbOn,setBulbOn]=useState(()=>{
    const storedValue=localStorage.getItem("bulbOn");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  const [curtainOpen, setCurtainOpen] = useState(() => {
    const storedValue = localStorage.getItem("curtainOpen");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  const toggleBulb = () => {
    setBulbOn(prevState => {
      const newState = !prevState;
      localStorage.setItem("bulbOn", JSON.stringify(newState));
      return newState;
    });
  };

  const toggleCurtain = () => {
    setCurtainOpen(prevState => {
      const newState = !prevState;
      localStorage.setItem("curtainOpen", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <>
    <Router>
    <div className="pages">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="button" element={<ButtonsPage toggleBulb={toggleBulb} toggleCurtain={toggleCurtain} />} />
          <Route path="/images" element={<ImagesPage bulbOn={bulbOn} curtainOpen={curtainOpen} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
