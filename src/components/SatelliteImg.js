import React, { useState } from "react";

//e.g const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key='
const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
const key = process.env.REACT_APP_NASA_KEY;

const SatelliteApp = (props) => {
  const { position } = props;
  const { search, setSearch } = useState("");
  const [results, setResults] = useState([]);
  let today = new Date(Date.now()).toLocaleDateString();
  const url = `${baseURL}?lon=${position.coords.longitude}&lat=${position.coords.latitude}&date=2020-08-01&dim=0.1&api_key=${key}`;

  return (
    <div className='main'>
      <div className='mainDiv'>
        <img src={url} style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default SatelliteApp;
