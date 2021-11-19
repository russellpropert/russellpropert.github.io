import express from 'express';
const app = express();

app.use(express.static('public'));

const create = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(
          {
            name,
            email,
            password
          }      
        );
      }
      catch(err) {
        reject(err);
      }
    }, 2000);
  });
}

app.get('/account/create/:name/:email/:password', (req, res) => {
  create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log(err));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})