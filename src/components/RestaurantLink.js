import React from "react";

import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const RestaurantLink = (props) => {
  const { restaurant } = props;
  // restaurant.photos_url
  return (
    <Card
      className='d-flex justify-content-center'
      style={{ height: "450px", width: "300px" }}
    >
      <div className='d-flex justify-content-center'>
        <Image
          src={restaurant.image_url}
          className='card-img-top'
          alt='restaurant photo'
          fluid
          style={{ width: "240px", height: "190px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          <p>{restaurant.categories[0].title}</p>
          <p>{restaurant.location.city}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className='bg-dark'>
        <Card.Link
          href={restaurant.url}
          className='text-white text-decoration-none'
          target='_blank'
        >
          Visit {restaurant.name} Site
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default RestaurantLink;
