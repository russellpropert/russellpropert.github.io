// Comment out the listener in http-server.js to run this.

const supertest = require('supertest');
const app = require('./http_server');
const request = supertest(app);

it('Hello World!', async done => {
  expect(1).toBe(1);
  done();
});

const server = app.listen(3000, function(){
    console.log('Running on port 3000!')
});

afterAll(done => {
  server.close();
  done();
});
