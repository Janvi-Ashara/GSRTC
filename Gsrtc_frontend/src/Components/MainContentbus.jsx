import React from 'react';
import logo from "./../logo.png";
import timetable from './../timetable.png';
import sea from './../sea.jpg';
import { useNavigate } from 'react-router-dom';

export default function MainContentbus() {
  const navigate = useNavigate();

  const handleTime = () => {
    navigate('/Timetable');  // Navigate to the Timetable page
  };

  const handleSearchBus = () => {
    navigate('/SearchBus');   // Navigate to the Search Bus page
  };

  return (
    <>
      <center>
        <div style={{ border: '2px solid black', height: '700px', width: '560px' }}>
          <img src={logo} alt="logo" style={{ marginTop: "40px" }} />
          <div style={{ display: 'flex' }}>
            <div style={{ width: '45%' }}>
              <img
                src={timetable}
                alt="timetable"
                style={{ cursor: "pointer" }}
                onClick={handleTime} // Navigate to Timetable when clicked
              />
              <b>Time Table</b>
            </div>
            <div style={{ width: '10%' }}>
              <p style={{ height: '130px', marginTop: '70px', border: '2px double black', width: '2px', backgroundColor: 'black' }} />
            </div>
            <div style={{ width: '45%' }}>
              <img
                src={sea}
                alt="sea"
                height={'225px'}
                width={'225px'}
                style={{ cursor: "pointer" }}
                onClick={handleSearchBus} // Navigate to Search Bus when clicked
              />
              <b>Search Bus</b>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
