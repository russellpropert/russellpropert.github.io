import express from 'express';
import redis from 'redis';

const app = express();
app.use(express.static('public'));
app.use(express.json());

// Docker command to set up Redis backend
// docker run -p 6379:6379 --name redis-for-holy-grail-app -d redis

const client = redis.createClient();

// initial values
client.mset('header', 0, 'left', 0, 'article', 0, 'right', 0, 'footer', 0);
client.mget(
  ['header', 'left', 'article', 'right', 'footer'],
  function(err, value) {
    console.log(value);
  }
);

const data = () => {
  return new Promise((resolve, reject) => {
    client.mget(
      ['header', 'left', 'article', 'right', 'footer'],
      function(err, value) {
        const data = {
          header: Number(value[0]),
          left: Number(value[1]),
          article: Number(value[2]),
          right: Number(value[3]),
          footer: Number(value[4])
        };
        err ? reject(null) : resolve(data);
      }
    );
  });
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', (req, res) => {
  data()
  .then(data => {
    res.send(data);
    console.log(data);
  });
});

app.post('/update/:section/:value', (req, res) => {
  const section = req.params.section;
  let value = Number(req.params.value);

  client.get(section, (err, reply) => {
    value = Number(reply) + value;
    client.set(section, value);
    data()
    .then(data => {
      res.send(data);
      console.log(data);
    })
  });

  // data[req.params.section] = data[req.params.section] + Number(req.params.value);
  // res.send(data);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
