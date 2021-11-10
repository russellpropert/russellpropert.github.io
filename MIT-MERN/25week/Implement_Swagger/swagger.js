const swaggerDocument = 
{
  "swagger": "2.0",
  "info": {
    "title": "Swagger Demo",
    "version": "1.0.0",
    "description": "This is an exercise to demonstrate swagger API documentation",
    "contact": {
      "email": "me@me.com"
    },
  },
  "host": "localhost:4000",
  "basePath": "/",
  "tags": [
    {
      "name": "Shapes",
      "description": "Get data for all shapes",
    },
    {
      "name": "Shape",
      "description": "Change data for one shape",
    }
  ],
  "schemes": [
    "http"
  ],
  "paths": {
    "/shapes": {
      "get": {
        "tags": [
          "Shapes"
        ],
        "summary": "Get all shapes",
        "description": "Returns an array of all shapes.",
        "operationId": "addPet",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Successful"
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/shape": {
      "post": {
        "tags": [
          "Shape"
        ],
        "summary": "Add a new shape",
        "description": "Add a new shape to the array",
        "consumes": [
          "application/json",
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "shape",
            "description": "Shape object to be added to the array.",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Shape"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful"
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/shape/{id}/toggle-solid": {
      "patch": {
        "tags": [
          "Shape"
        ],
        "summary": "Toggle solid value",
        "description": "Toggle if a shape is solid or not.",
        "consumes": [
          "application/json",
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "ID of the object to be toggled.",
            "required": true,
          }
        ],
        "responses": {
          "200": {
            "description": "Successful"
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    }
  },
  "definitions": {
    "Shape": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
        },
        "shape": {
          "type": "string",
        },
        "solid": {
          "type": "boolean",
        },
        "color": {
          "type": "string",
        }
      }
    }
  }
};

export default swaggerDocument;