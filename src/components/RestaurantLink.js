import React from "react";


const RestaurantLink = (props) => {
const { restaurant } = props;

console.log(restaurant.cuisines);
return (
    <div>
      <a href={restaurant.url} target="_blank" className="">
        <div className=""><p className="">{restaurant.name}</p></div>
      </a>
        <p className="">{restaurant.cuisines}</p>
        <p className=""><span className="">{restaurant.location.locality_verbose}</span></p>
    </div>
  )
}

export default RestaurantLink;