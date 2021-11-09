const swaggerDocument = 
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "My Restaurant Project CRUD",
    "description": "My User Project Application API",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": "localhost:4000",
  "basePath": "/",
  "tags": [
    {
      "name": "Restaurants",
      "description": "API to get all restaurants."
    },
    {
      "name": "Restaurant",
      "description": "API to modify one restaurant."
    }
  ],
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],

  "paths": {
    "/restaurants": {
      "get": {
        "tags": ["Restaurants"],
        "summary": "Get all restaurants.",
        "description": "Get all restaurants.",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Restaurant"
            }
          }
        }
      }
    },
    "/restaurant": {
      "post": {
        "tags": ["Restaurant"],
        "summary": "Add a restaurant.",
        "description": "Add a restaurant.",
        "parameters": [
          {
            "name": "restaurant",
            "in": "body",
            "required": true,
            "description": "A restaurant we want to add.",
            "schema": {
              "$ref": "#/definitions/Restaurant"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "A new restaurant has been created.",
            "schema": {
              "$ref": "#/definitions/Restaurant"
            }
          }
        }
      }
    },
    "/restaurant/{id}": {
      "delete": {
        "tags": ["Restaurant"],
        "summary": "Add a restaurant.",
        "description": "Add a restaurant.",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "A restaurant we want to delete.",
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "The restaurant has been deleted."
          }
        }
      }
    }
  },
  "definitions": {
    "Restaurant": {
      "required": ["id", "name"],
      "properties": {
        "id": {
          "type": "integer",
          "uniqueItems": true
        },
        "name": {
          "type": "string"
        }
      }
    }
  }
};

export default swaggerDocument;