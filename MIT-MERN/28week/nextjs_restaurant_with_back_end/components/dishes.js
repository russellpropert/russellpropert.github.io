import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import AppContext from './context';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col
} from 'reactstrap';

function Dishes(props) {
  const { addItem } = useContext(AppContext);

  const GET_RESTAURANT_DISHES = gql`
    query($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  console.log('dishes restarantID: ', props.restaurantID);
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: {id: props.restaurantID}
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color: 'red'}}>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log('dishes data: ', data)

  let results;
  if (data.restaurant) {
    const restaurant = data.restaurant;
    results = restaurant.dishes.map(dish => (
      <Col sm="4" key={dish.id}>
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            top={true}
            src={`http://localhost:1337${dish.image.url}`}
          />
          <CardBody>
            <CardTitle style={{ fontSize: "1.4rem", fontWeight: "bold"}}>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            <CardText style={{ fontWeight: "bold"}}>${dish.price}</CardText>
          </CardBody>
          <div className="card-footer">
            <Button 
              outline
              color="primary"
              onClick={() => addItem(dish)}
            >Add to Cart</Button>
          </div>
        </Card>
      </Col>
    ));
    } else {
      results = (
        <Container>
          <h5 style={{textAlign: "center"}}>Select a restaurant to see the menu.</h5>
        </Container>
      )
    }

  return (
    <>
     {results}
    </>
  );
}

export default Dishes;