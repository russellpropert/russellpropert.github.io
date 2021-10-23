const express = require('express');
const app = express();
app.use(express.json());

const restaurants = [{id: 0, name: "Woodshill"}, {id: 1, name: "1906"}];

const options = {
  dotfiles: "ignore",
  redirect: false
}

app.use(express.static('public', options));

app.get('/', (req, res) => {
  let html = "<img src='img/image.png'/><br/>"
  let key = "<a href='.secret/key.txt'>secret key</a>"
  res.send(html+key);
});

app.get('/restaurants', (req, res) => {
  res.send(restaurants);
})

app.listen('3000', () => {
  console.log('Listenting on port 3000');
});