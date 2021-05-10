import React from "react";

import restaurantIcon from "../img/restaurant-icon.jpg";

import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const RestaurantLink = (props) => {
  const { restaurant } = props;
  // restaurant.photos_url
  return (
    <Card className='' style={{ height: "450px", width: "300px" }}>
      <div className='d-flex justify-content-center'>
        <Image
          src={restaurantIcon}
          className='card-img-top'
          alt='restaurant photo'
          fluid
          style={{ width: "240px", height: "190px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          <p>{restaurant.cuisines}</p>
          <p>{restaurant.location.locality}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className='bg-dark'>
        <Card.Link
          href={restaurant.url}
          className='text-white text-decoration-none'
          target='_blank'
        >
          Visit Restaurant Site
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default RestaurantLink;
