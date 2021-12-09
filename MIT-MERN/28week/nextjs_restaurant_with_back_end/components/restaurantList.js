import { gql, useQuery } from '@apollo/client';
import Dishes from './dishes';
import { useContext, useState, useEffect } from 'react';
import AppContext from './context';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from 'reactstrap';

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);

  useEffect(() => {
    setRestaurantID(0);
  }, [props.searchValue]);

  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color: 'red'}}>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log('restaurantList Query Data: ', data.restaurants);
  console.log('restaurantList props.searchValue: ', props.searchValue);

  // Search restaurant names
  const searchResults = data.restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(props.searchValue)
  }) || [];

  if (searchResults.length > 0) {
    const restaurantList = searchResults.map((restaurant) => (
      <Col sm="4" key={restaurant.id}>
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            top={true}
            style={{ height: 200 }}
            src={
              `http://localhost:1337${restaurant.image.url}`
            }
          />
          <CardBody>
            <CardTitle style={{ fontSize: "1.4rem", fontWeight: "bold"}}>{restaurant.name}</CardTitle>
            <CardText>{restaurant.description}</CardText>
          </CardBody>
          <div className="card-footer">
            <Button color="info" onClick={() => setRestaurantID(restaurant.id)}>See Menu</Button>
          </div>
        </Card>
      </Col>
    ))

    return (
      <Container>
        <Row xs='3'>
          {restaurantList}
        </Row>

        <Row xs='3'>
          <Dishes restaurantID={restaurantID}></Dishes>
        </Row>
      </Container>
    );
  } else {
    return <h2>No Restaurants Found</h2>
  }
}

export default RestaurantList;