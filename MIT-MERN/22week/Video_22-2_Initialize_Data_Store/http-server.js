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

// Return all users
app.get('/data', function(req, res) {
  res.send(db.get('users').value());
});

// Start server
app.listen(3000, function() {
  console.log('Running on port 3000!');
});
