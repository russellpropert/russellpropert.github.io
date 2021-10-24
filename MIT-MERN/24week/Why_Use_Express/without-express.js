const http = require('http');

const server = http.createServer((req, res) => {
  // This function is called once the headers have been received
  res.setHeader('Content-Type', 'application/json');

  const urls = [
    '/user',
    '/order/'
  ]

  if (req.method !== 'POST' || !urls.includes(req.url)) {
    res.statusCode = 405;
    res.end('{"error": "METHOD_NOT_ALLOWED"}');
    return;
  }

  // user route
  if (req.url === urls[0]) {
    let body = '';

    req.on('data', (data) => {
      // This function is called as chuncks of body are received
      body += data
    });
  
    req.on('end', () => {
      // This function is called once the body has been fully received
      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch (e) {
        res.statusCode = 400;
        res.end('{"error": "CANNOT_PARSE"}');
        return;
      }
  
      res.end(JSON.stringify({
        error: false,
        username: parsed.username
      }));
    });
  
  }

  // order route
  if (req.url === urls[1]) {
    let body = '';

    req.on('data', (data) => {
      // This function is called as chuncks of body are received
      body += data
    });
  
    req.on('end', () => {
      // This function is called once the body has been fully received
      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch (e) {
        res.statusCode = 400;
        res.end('{"error": "CANNOT_PARSE"}');
        return;
      }
  
      res.end(JSON.stringify({
        error: false,
        order: parsed.order
      }));
    });
  
  }

});

const port = 3000

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
