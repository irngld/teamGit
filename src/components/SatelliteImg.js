import React, { useState } from "react";

//e.g const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key='
const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = process.env.REACT_APP_NASA_KEY;

const SatelliteApp = (props) => {
  const { position } = props;
  
  // Hardcoded date for clear skies
  const url = `${baseURL}?lon=${position.coords.longitude}&lat=${position.coords.latitude}&date=2020-08-01&dim=0.1&api_key=${key}`;

  return (
    <div className='card'>
      <h4>Satellite Image</h4>
      <div className='mainDiv'>
        <img src={url} style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default SatelliteApp;
