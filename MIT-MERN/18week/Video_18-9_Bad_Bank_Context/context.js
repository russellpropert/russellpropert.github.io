const {HashRouter, Link, Route} = ReactRouterDOM;
const {createContext, useContext} = React;

const Context = createContext(null);

let data = {
  users: [
    {
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@mail.com',
      password: 'somehash',
      balance: 10000
    }
  ]
}