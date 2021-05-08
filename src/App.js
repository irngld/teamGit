import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import bigBrother from "./utils/geoLocation";

// import Header from './components/Header'
// import Footer from './components/Footer'
// import SatelliteApp from './components/SatelliteImg';
import WeatherImg from "./components/WeatherImg";

function App() {
  const coords = bigBrother();
  console.log(coords);

  return (
    <div className='App'>
      {/* <Header /> */}
      <WeatherImg coords={coords} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
