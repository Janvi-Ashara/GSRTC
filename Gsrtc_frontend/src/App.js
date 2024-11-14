
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import bus from "./bus.png"; // Splash screen image
import MainContentbus from './Components/MainContentbus'; // Main Content component
import Timetable from './main/Timetable'; // Timetable component
import SearchBus from './main/SearchBus'; // Search Bus component

// Splash Screen component
const SplashScreen = () => {
  return (
    <center>
      <div style={{height: '700px',width: '560px',backgroundColor: '#fff',border: '2px solid black',marginTop:'20px'}}>
        <h1>Welcome to GSRTC Application</h1>
        <img src={bus} alt="bus" height="350px" width="500px" style={{ marginTop: "60px" }} />
        <h4>Please wait...</h4>
      </div>
    </center>
  );
};

// Main App with Splash Screen
const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Splash screen state
  const navigate = useNavigate();
  fetch('http://localhost:5000/api/bus').then((data)=>(data.json())).then((data)=>console.log(data))
  useEffect(() => {
    // Simulate a 2-second splash screen\
    
    const timer = setTimeout(() => {
      setIsLoading(false); // Splash screen disappears
      navigate("/MainContentbus"); // Automatically navigate to MainContentbus
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div>
      {isLoading ? <SplashScreen /> : null} {/* Display Splash Screen */}
    </div>
  );
};

// Wrapper to handle routing globally
const AppWrapper = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainContentbus" element={<MainContentbus />} />
        <Route path="/Timetable" element={<Timetable />} />
        <Route path="/SearchBus" element={<SearchBus />} />
      </Routes>
    </Router>
  );
};

export default AppWrapper;
