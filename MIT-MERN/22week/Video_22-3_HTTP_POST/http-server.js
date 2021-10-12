// Set up Express
const express   = require('express');
const app       = express();

// Set up LowDB
const low       = require('lowdb');
const fs        = require('lowdb/adapters/FileSync');
const adapter   = new fs('db.json');
const db        = low(adapter);

// Initialize the data store
db.defaults({users: []}).write();

// Data parser - used to parse post data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Or
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// Return all users
app.get('/data', function(req, res) {
  res.send(db.get('users').value());
});

// Post route
app.post('/test', function(req, res) {
  console.log(req.body.username, req.body.password);
  res.send(req.body.username + ' ' + req.body.password);
})

// Add user
app.post('/add', function(req, res) {
  const user = {
    'name': req.body.name,
    'dob': req.body.dob,
    'email': req.body.email,
    'username': req.body.username,
    'password': req.body.password,
    'phone': req.body.phone,
    'streetaddress': req.body.streetaddress,
    'citystatezip': req.body.citystatezip,
    'latitude': req.body.latitude,
    'longitude': req.body.longitude,
    'avatar': req.body.avatar
  }
  db.get('users').push(user).write();
  console.log(db.get('users').value());
  res.send(db.get('users').value());
});

// Start server
app.listen(3000, function() {
  console.log('Running on port 3000!');
});
