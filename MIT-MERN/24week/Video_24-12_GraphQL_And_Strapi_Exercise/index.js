const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const contacts = [
  {
    id:1,
    name: "peter parker",
    age: 21,
    email: "peter@mit.edu",
    courses: [
      { number: "1.00", name: "engr comp" },
      { number: "3.00", name: "intro bio" }
    ]
  },
  {
    id:2,
    name: "bruce wayne",
    age: 32,
    email: "bruce@mit.edu",
    courses: [
      { number: "2.00", name: "intro ME" },
      { number: "3.00", name: "intro MS" }
    ]
  },
  {
    id:3,
    name: "diana prince",
    age: 25,
    email: "diana@mit.edu",
    courses: [
      { number: "2.00", name: "intro arch" },
      { number: "1.00", name: "intro chem" }
    ]
  },
];

const restaurants = [
  {
    id: 0,
    name: "WoodsHill",
    description: "American cuisine, farm to table, with fresh produce every day",
    dishes: [
      {
        name: "Swordfish grill",
        price: 27
      },
      {
        name: "Roasted Broccily ",
        price: 11
      }
    ]
  },
  {
    id: 1,
    name: "Fiorellas",
    description: "Italian-American home cooked food with fresh pasta and sauces",
    dishes: [
      {
        name: "Flatbread",
        price: 14
      },
      {
        name: "Carbonara",
        price: 18
      },
      {
        name: "Spaghetti",
        price: 19
      }
    ]
  },
  {
    id: 2,
    name: "Karma",
    description: "Malaysian-Chinese-Japanese fusion, with great bar and bartenders",
    dishes: [
      {
        name: "Dragon Roll",
        price: 12
      },
      {
        name: "Pancake roll ",
        price: 11
      },
      {
        name: "Cod cakes",
        price: 13
      }
    ]
  }
]


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    contact(id: Int): Contact
    contacts: [Contact]
    restaurant(id: Int): Restaurant
    restaurants: [Restaurant]
  },
  type Contact {
    name: String
    email: String
    age: Int
    courses: [Course]
  },
  type Course {
    number: String
    name: String
  },
  type Restaurant {
    name: String
    description: String
    dishes: [Dish]
  },
  type Dish {
    name: String
    price: Int
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  contact: (arg) => contacts[arg.id],
  contacts: () => contacts,
  restaurant: (arg) => restaurants[arg.id],
  restaurants: () => restaurants
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running Graphql on Port 4000.');
});
