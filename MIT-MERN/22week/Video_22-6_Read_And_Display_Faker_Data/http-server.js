// Set up Express
const express   = require('express');
const app       = express();

// Set up LowDB
const low       = require('lowdb');
const fs        = require('lowdb/adapters/FileSync');
const adapter   = new fs('db.json');
const db        = low(adapter);

// Setup Chalk
const chalk = require('chalk');

// Setup Moment
const moment = require('moment');

// Initialize the data store
db.defaults({users: []}).write();

// Serve static files from public
app.use(express.static('public'));

// Data parser - used to parse post data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Return all users
app.get('/data', function(req, res) {
  const data = db.get('users').value();
  console.log(`
${chalk.blue.bgWhite.bold(JSON.stringify(data[0]))}
${chalk.rgb(255,131,0).underline('test')}
${chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
    )}
${moment().format('MMMM Do YYYY, h:mm:ss a')}
${moment().format('MMM Do YY')}
${chalk.yellow.underline(moment().subtract(10, 'days').format('MMM Do YY'))}
${moment().calendar()}
${chalk.red.underline(moment().endOf('day').fromNow())}
  `);
  res.send(data);
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
