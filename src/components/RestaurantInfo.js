import React, { useEffect, useState } from "react";
import RestaurantLink from "./RestaurantLink";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const RestaurantInfo = (props) => {
  const [data, setData] = useState();
  const [showEnglishUnits, setShowEnglishUnits] = useState(true);
  const { position } = props;

  let baseURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

  let url = `${baseURL}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&term=restaurants`; //

  console.log("2. URL", url);

  const initData = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_YELP_BEARER_TOKEN,
      },
    });
    const data = await response.json();
    console.log("3. json", data);

    setData(data);
  };

  useEffect(() => {
    initData();
  }, [url]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Nearby Restaurants</h3>
          </Col>
        </Row>
        <Row lg={4} md={3}>
          {data?.businesses?.map((business) => {
            return (
              <Col>
                <RestaurantLink key={business.id} restaurant={business} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default RestaurantInfo;
