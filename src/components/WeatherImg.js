import React, { useEffect, useState } from "react";
import tempConv from "../utils/tempConv";
// const baseURL = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

const WeatherLocation = (props) => {
  const [data, setData] = useState();
  const [showEnglishUnits, setShowEnglishUnits] = useState(true);
  const { position } = props;

  let baseURL = "https://api.openweathermap.org/data/2.5/weather";

  console.log(
    "1. weather",
    position?.coords.latitude,
    position?.coords.longitude
  );
  let url = `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`; //process.env.WEATHER_KEY
  // let url = `${baseURL}?lat=${51.5074}&lon=${0.1278}&appid=${process.env.REACT_APP_WEATHER_KEY}`; //process.env.WEATHER_KEY
  // LONDON 51.5074° N, 0.1278° W ; 35 : 139
  console.log("2. URL", url);

  const initData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("3. json", data);

    const temps = tempConv(data.main.temp);
    console.log("4. conversion", temps);

    data.temps = temps;

    // console.log(data);

    setData(data);
  };

  useEffect(() => {
    initData();
  }, [url]);

  //   const toggleUnits = (e) => {
  //     console.log(e);
  //     if (e.checked === true) {
  //       setShowEnglishUnits(true);
  //     } else {
  //       setShowEnglishUnits(false);
  //     }
  //   };

  return (
    <div className='card' style={{ width: "18rem" }}>
      <div className='card-header'>
        <h2>Local Weather</h2>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        className='card-img-top'
        alt=''
      />
      <div className='card-body'>
        <ul className='card-text'>
          <li>{`Location: ${data?.name}, ${data?.sys.country} `}</li>
          <li>{`Conditions: ${data?.weather[0].description}`}</li>
          <li>
            Temp:{" "}
            {showEnglishUnits === true
              ? ` ${data?.temps.farenheit} F `
              : ` ${data?.temps.celsius} C`}
          </li>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              id='flexSwitchCheckChecked'
              //   onChange={(e) => toggleUnits(e)}
            />
            <label
              className='form-check-label'
              htmlFor='flexSwitchCheckChecked'
            ></label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WeatherLocation;
