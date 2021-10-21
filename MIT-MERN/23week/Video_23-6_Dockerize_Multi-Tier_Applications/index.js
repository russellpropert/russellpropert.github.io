const express = require('express');
const app = express();
const port = '3000';

var { MongoClient } = require('mongodb');

// The name "mongo" comes from the docker link in the docker-compose.yml
const url = 'mongodb://mongo:27017';
const client = new MongoClient(url);

const dbName = 'dockerdemo';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db;
}

const db = main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', (req, res) => {
  res.send('Greetings from the server!');
});

app.get('/createMongo', async (req, res) => {
  const name = `User${Math.floor(Math.random() * 10000)}`;
  const email = `${name}@mit.edu`;
  const collection = db.collection('customers');
  const doc = {'name': name, 'email': email};
  await collection.insert(doc, {w:1}, (err, result) => {
    console.dir(result);
    res.send(result);
  });
});

app.get('/readMongo', (req, res) => {
  const collection = db
    .collection('customers')
    .find()
    .toArray((err, docs) => {
      console.dir(docs);
      res.send(docs);
    });
});

app.listen(port, () => {
  console.log('Listening on port 3000.');
});