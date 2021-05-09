import React, { useEffect, useState } from "react";
const yelp = require("yelp-fusion");

const RestaurantInfo = (props) => {
  const [data, setData] = useState();
  const [showEnglishUnits, setShowEnglishUnits] = useState(true);
  const { position } = props;

  let baseURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete";

  let url = `${baseURL}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&text=restaurants`; //process.env.WEATHER_KEY

  console.log("2. URL", url);

  const initData = async () => {
    // const response = await fetch(url, {
    //   headers: {
    //     Authorization: "Bearer " + process.env.REACT_APP_YELP_BEARER_TOKEN,
    //   },
    // });
    // const data = await response.json();
    // console.log("3. json", data);

    // setData(data);

    const searchRequest = {
      term: "Restaurants",
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

    const client = yelp.client(process.env.REACT_APP_YELP_BEARER_TOKEN);

    client
      .search(searchRequest)
      .then((response) => {
        const businesses = response.jsonBody.businesses;
        console.log(businesses);
        setData(businesses);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    initData();
  }, [url]);

  return <div>hello</div>;
};

export default RestaurantInfo;
