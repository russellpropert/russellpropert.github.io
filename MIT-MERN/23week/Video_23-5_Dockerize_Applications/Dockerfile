FROM node:slim

LABEL author="russellpropert@gmail.com"

# work directroy for the application in the container
WORKDIR /app

# copy code, install npm dependencies
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install