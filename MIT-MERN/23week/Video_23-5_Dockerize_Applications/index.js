const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(new Date().toLocaleString());
    res.send(new Date().toLocaleString());
})

app.listen(port, () => {
  console.log('Listening on port:' + port);
});