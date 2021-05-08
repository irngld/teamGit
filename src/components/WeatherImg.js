import React, { useEffect, useState } from "react";
import tempConv from "../utils/tempConv";
// const baseURL = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
const WeatherLocation = (props) => {
  const [data, setData] = useState();
  const { coords } = props;
  const baseURL = "https://api.openweathermap.org/data/2.5/weather";
  // const { search, setSearch} = useState('');
  // const [ results, setResults ] = useState([]);
  console.log(coords);
  console.log(process.env.REACT_APP_WEATHER_KEY);
  let url = `${baseURL}?lat=${51.5074}&lon=${0.1278}&appid=${"41d141e356b1c7f86b7adebe27a7f182"}`; //process.env.WEATHER_KEY
  // let url = `${baseURL}?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`;
  // LONDON 51.5074° N, 0.1278° W ; 35 : 139

  console.log(url);
  const initData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const temps = tempConv(data.main.temp);
    console.log(temps);

    data.temps = temps;

    console.log(data);

    setData(data);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    // <div>
    //     <h2>Local Weather</h2>
    //     <img src={`http://openweathermap.org/img/wn/${data && data.weather[0].icon}@2x.png`} alt='' />
    // </div>
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
          <li>{`Temp: ${data?.temps.farenheit} `}</li>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              id='flexSwitchCheckChecked'
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
