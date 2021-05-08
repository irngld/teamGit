import "./App.css";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";


// import Header from './components/Header'
// import Footer from './components/Footer'
// import SatelliteApp from './components/SatelliteImg';
import WeatherImg from "./components/WeatherImg";

function App() {
  const [data, setData] = useState();
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setData(position)
    });
  }, []);

  // getInitialState: () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setData(position)
  //   });
  // }


  return (
    <div className='App'>
      {/* <Header /> */}
      {(data) ? <WeatherImg position={data} /> : <></>}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
