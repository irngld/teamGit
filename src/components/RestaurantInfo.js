import React, { useEffect, useState } from "react";
import RestaurantLink from './RestaurantLink';

const RestaurantInfo = (props) => {
  const [data, setData] = useState();
  const [showEnglishUnits, setShowEnglishUnits] = useState(true);
  const { position } = props;

  // let baseURL = 'https://developers.zomato.com/api/v2.1/geocode'  
  // let url = `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
  let url = `https://developers.zomato.com/api/v2.1/geocode?lat=39.86854&lon=-86.13443`

  console.log("2. URL", url);

  const initData = async () => {
    const response = await fetch(url, {
      headers: {
        'User-Key': '0586265890c1a72bf88272b30187f388' // process.env.REACT_APP_ZOMATO_TOKEN // 
      },
    });
    const data = await response.json();
    console.log("3. json", data);

    setData(data);
  };


  useEffect(() => {
    initData();
  }, [url]);


  // return <div>
  //   <h1>RestaurantInfo</h1>
  //   {
  //   data?.nearby_restaurants?.map((restaurant) => {
  //       return <div key={restaurant.restaurant.R.res_id} > <a href={restaurant.restaurant.url}>{restaurant.restaurant.name} </a> </div>
  //     })
  //   }
  //   </div>;

  return <div>
    <h1>RestaurantInfo</h1>
    {
    data?.nearby_restaurants?.map((restaurant) => {
        return <RestaurantLink key={restaurant.restaurant.R.res_id} restaurant={restaurant.restaurant}/>
      })
    }
    </div>;
};

export default RestaurantInfo;
