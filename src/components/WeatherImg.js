import React, { useEffect, useState } from "react";
import tempConv from "../utils/tempConv";
import ToggleSwitch from "@trendmicro/react-toggle-switch";

const WeatherLocation = (props) => {
  const [data, setData] = useState();
  const [showEnglishUnits, setShowEnglishUnits] = useState(true);
  const { position } = props;

  let baseURL = "https://api.openweathermap.org/data/2.5/weather";

  let url = `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`;

  const initData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const temps = tempConv(data.main.temp);

    data.temps = temps;

    setData(data);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <div className='card'>
        <span className='icon'>
          <img
            className='img-fluid'
            src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
          />
        </span>
        <div className='title'>
          <p>{data?.name}</p>
        </div>
        <div className='temp'>
          {showEnglishUnits === true
            ? ` ${data?.temps.farenheit}`
            : ` ${data?.temps.celsius}`}
          <sup>&deg;</sup>
          {showEnglishUnits === true ? ` F` : ` C`}
        </div>
        <div className='row justify-content-center'>
          <div className='header'>Conditions</div>
          <div className='value'>{data?.weather[0].description}</div>
        </div>
        <div className='row justify-content-center'>
          <span className='col'>
            <sup>&deg;</sup>C
          </span>
          <ToggleSwitch
            checked={showEnglishUnits}
            onChange={(event) => {
              setShowEnglishUnits(!showEnglishUnits);
            }}
          />
          <span className='col'>
            <sup>&deg;</sup>F
          </span>
        </div>
      </div>
    </>
  );
};

export default WeatherLocation;
