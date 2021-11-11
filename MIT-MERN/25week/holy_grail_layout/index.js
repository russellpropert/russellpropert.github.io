import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());

const data = {
  header: 0,
  left: 0,
  article: 0,
  right: 0,
  footer: 0
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', (req, res) => {
  res.send(data);
})

app.post('/update/:section/:value', (req, res) => {
  data[req.params.section] = data[req.params.section] + Number(req.params.value);
  res.send(data);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
