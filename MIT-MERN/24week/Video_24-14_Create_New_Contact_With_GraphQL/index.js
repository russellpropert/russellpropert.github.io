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

const schema = buildSchema(`
  type Query {
    contacts: [Contact]
  },
  type Contact {
    id: Int
    name: String
    age: Int
    email: String
    courses: [Course]
  },
  type Course {
    number: String
    name: String
  },
  input ContactInput {
    id: Int
    name: String
    email: String
    age: Int
  },
  type DeleteResponse {
    ok: Boolean!
  },
  type Mutation {
    setContact(input: ContactInput): Contact
    deleteContact(id: Int!): DeleteResponse
    editContact(id: Int!, age: Int!): Contact
  },
`);

const root = {
  contacts: () => contacts,
  setContact: ({input}) => {
    contacts.push(input);
    return input;
  },
  deleteContact: ({id}) => {
    const contact = contacts.find(contact => contact.id === id);
    const ok = Boolean(contact);
    console.log(contact);
    const index = contacts.indexOf(contact);
    console.log(index);
    contacts.splice(index, 1);
    return {ok};
  },
  editContact: ({id, ...contact}) => {
    const verifyContact = contacts.find(contact => contact.id === id);
    const index = contacts.indexOf(verifyContact);
    if (!verifyContact) {
      throw new Error("Contact doesn't exist");
    }
    contacts[index] = {
      ...contacts[index], ...contact
    }
    return contacts[index];
  }
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('GraphQL is listening on port 4000.');
});