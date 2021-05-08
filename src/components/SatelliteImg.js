import React, { useState } from 'react';

//e.g const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key='
const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key='
const key = process.env.NASA_KEY;

const App = () => {
    
}

const SatelliteApp = () => {
    const { search, setSearch} = useState('');
    const [ results, setResults ] = useState([]);
    let today = new Date(Date.now()).toLocaleDateString();
    const fetchResults = () => {
        let url = `${baseURL}?lon=${-95.33}&lat=${29.78}&date=${today}&api_key=${key}`;
        
        
        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response.docs))
            .catch(err => console.log(err))
    }

    return (
        <div className="main">
            <div className="mainDiv">

            </div>
        </div>
    )
}


// export default SatelliteApp;