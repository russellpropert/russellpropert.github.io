const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Library API',
      version: '1.0.0'
    }
  },
  apis: ['app.js']
}

const apiRoute = '/api-docs'

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(apiRoute, swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.send(`Use ${apiRoute} to get the API documntation`);
})

/**
* @swagger
* /books:
*   get:
*     summary: Get all books
*     description: Get a list of all the books.
*     responses:
*       200:
*         description: Success
*       400:
*         description: Invalid status value
*    
*/

app.get('/books', (req, res) => {
  res.send([
    {
      isbn: '9781781100486',
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      publisher: 'Scholastic'
    }
  ]);
});

/**
* @swagger
* /book:
*   post:
*     summary: Get one book title
*     description: Get one book title.
*     parameters:
*     - name: title
*       description: Book title
*       in: body
*       required: true
*       type: string
*     responses:
*       200:
*         description: Success
*       400:
*         description: Invalid status value
*
*/

app.post('/book', (req, res) => {
  const title = req.body.title;
  res.send({ title });
});

app.listen(3000, () => {
  console.log('Listening on port 3000.')
});