import "./App.css";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
//NOTE: react toggle component
//https://github.com/trendmicro-frontend/react-toggle-switch
import "@trendmicro/react-toggle-switch/dist/react-toggle-switch.css";

// import Header from "./components/Header";
// import Footer from './components/Footer'
import SatelliteApp from "./components/SatelliteImg";
import WeatherImg from "./components/WeatherImg";
import RestaurantInfo from "./components/RestaurantInfo";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setData(position);
    });
  }, []);

  // getInitialState: () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setData(position)
  //   });
  // }

  // return (
  //   <div className='App'>
  //     {/* <Header /> */}
  //     <div className='d-flex flex-row w-100 justify-content-center '>
  //       {data ? <WeatherImg position={data} /> : <></>}
  //       {data ? <SatelliteApp position={data} /> : <></>}
  //     </div>
  //     <div className='w-25'>
  //       {data ? <RestaurantInfo position={data} /> : <></>}
  //     </div>
  //   </div>
  // );

  return (
    <div className='App'>
      {/* <Header /> */}
      <div className='d-flex flex-row w-100 justify-content-center '>
        {data ? <WeatherImg position={data} /> : <></>}
        {data ? <SatelliteApp position={data} /> : <></>}
      </div>
      <div className=''>
        {data ? <RestaurantInfo position={data} /> : <></>}
      </div>
    </div>
  );
}

export default App;
