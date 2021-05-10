import "./App.css";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
//NOTE: react toggle component
//https://github.com/trendmicro-frontend/react-toggle-switch
import "@trendmicro/react-toggle-switch/dist/react-toggle-switch.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SatelliteApp from "./components/SatelliteImg";
import WeatherImg from "./components/WeatherImg";
import RestaurantInfo from "./components/RestaurantInfo";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState();

  const initData = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setData(position);
    });

    const response = await fetch("https://geolocation-db.com/json/");
    const json = await response.json();

    setLocation(json);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className='App'>
      <Header location={location} />
      <div className='d-flex flex-row w-100 justify-content-center mt-5 mb-5 '>
        {data ? <WeatherImg position={data} /> : <></>}
        {data ? <SatelliteApp position={data} /> : <></>}
      </div>
      <div className=''>
        {data ? <RestaurantInfo position={data} /> : <></>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
