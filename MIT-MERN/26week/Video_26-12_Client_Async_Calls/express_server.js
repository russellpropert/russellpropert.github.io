import express from 'express';
const app = express();

app.use(express.static('public'));

const create = (name, email, password) => {
  return (
    {
      name,
      email,
      password
    }
  );
}

app.get('/account/create/:name/:email/:password', (req, res) => {
  res.send(create(
    req.params.name,
    req.params.email,
    req.params.password
  ));
})

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})