import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
