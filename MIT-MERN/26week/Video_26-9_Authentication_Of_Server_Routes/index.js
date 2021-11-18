const express = require('express');
const app = express();
const admin = require('./admin');

app.use(express.static('public'));

// Open route with no verification
app.get('/open', (req, res) => res.send('Open Route.'));

// Verify token at the root route
app.get('/auth', (req, res) => {
  // Read token from header
  const idToken = req.headers.authorization;
  console.log('header:', idToken);

  //Verify token
  admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log('decodedToken:', decodedToken);
      res.send('Authentication Success');
    })
    .catch((error) => {
      console.log('error:', error);
      res.send('Authentication Fail!');
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});