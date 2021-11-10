FROM node:slim
LABEL author="russellpropert"
WORKDIR /app
COPY index.js /app/index.js
COPY package.json /app/package.json
COPY swagger.js /app/swagger.js
RUN npm install
CMD ["npm", "start"]
