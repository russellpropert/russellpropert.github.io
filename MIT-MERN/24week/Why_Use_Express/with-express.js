const express = require('express');
const app = express();

app.post('/user', (req, res) => {
  // This function is called once the headers have been received
  let body = '';

  req.on('data', (data) => {
    // This function is called as chunks of body are received
    body += data;
  });

  req.on('end', () => {
    // This function is called once the body has been fully received
    let parsed;

    try {
      parsed = JSON.parse(body);
    } catch (e) {
      res.statusCode = 400;
      res.json({
        error: 'CANNOT_PARSE'
      });
      return;
    }

    res.json({
      error: false,
      username: parsed.username
    });

  });

});

app.post('/order/', (req, res) => {
  // This function is called once the headers have been received
  let body = '';

  req.on('data', (data) => {
    // This function is called as chunks of body are received
    body += data;
  });

  req.on('end', () => {
    // This function is called once the body has been fully received
    let parsed;

    try {
      parsed = JSON.parse(body);
    } catch (e) {
      res.statusCode = 400;
      res.json({
        error: 'CANNOT_PARSE'
      });
      return;
    }

    res.json({
      error: false,
      order: parsed.order
    });

  });

});

const port = 3001

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
