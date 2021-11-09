import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';

const app = (express());
app.use(express.json());

let restaurants = [
  {
    id: 1,
    name: "WoodsHill ",
    description: "American cuisine, farm to table, with fresh produce every day",
    dishes: [
      {
        name: "Swordfish grill",
        price: 27,
      },
      {
        name: "Roasted Broccily ",
        price: 11,
      },
    ],
  },
  {
    id: 2,
    name: "Fiorellas",
    description: "Italian-American home cooked food with fresh pasta and sauces",
    dishes: [
      {
        name: "Flatbread",
        price: 14,
      },
      {
        name: "Carbonara",
        price: 18,
      },
      {
        name: "Spaghetti",
        price: 19,
      },
    ],
  },
  {
    id: 3,
    name: "Karma",
    description: "Malaysian-Chinese-Japanese fusion, with great bar and bartenders",
    dishes: [
      {
        name: "Dragon Roll",
        price: 12,
      },
      {
        name: "Pancake roll ",
        price: 11,
      },
      {
        name: "Cod cakes",
        price: 13,
      },
    ],
  },
];

const apiDocRoute = '/api-docs';
app.use(apiDocRoute, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send(`Use ${apiDocRoute} to see API documentation.`);
});

app.get('/restaurants', (req, res) => {
  res.send(restaurants);
});

app.post('/restaurant', (req, res) => {
  const resturant = req.body;
  restaurants.push(resturant);
  res.send(`${req.body.name} created`)
})

app.delete('/restaurant/:id', (req, res) => {
  console.log(`Delete ID: ${req.params.id}`)
  restaurants = restaurants.filter(item => item.id !== Number(req.params.id));
  res.send(`Restaurants left: ${JSON.stringify(restaurants)}`);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
})