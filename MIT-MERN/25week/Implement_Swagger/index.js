import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';

const app = express();
app.use(express.json());

let shapes = [
  {
    id: 0,
    shape: "circle",
    solid: true,
    color: "red"
  },
  {
    id: 1,
    shape: "square",
    solid: false,
    color: "blue"
  },
];

const apiDocRoute = '/api-docs';
app.use(apiDocRoute, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send(`Use ${apiDocRoute} to see the API documentation.`);
});

app.get('/shapes', (req, res) => {
  res.send(shapes);
});

app.post('/shape', (req, res) => {
  shapes.push(req.body);
  res.send(shapes);
});

app.patch('/shape/:id/toggle-solid', (req, res) => {
  shapes.forEach(shape => shape.id === Number(req.params.id) ? shape.solid = !shape.solid : null);
  res.send(shapes);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});