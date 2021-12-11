FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /user/src/app
WORKDIR /user/src/app

# Installing dependencies
COPY package*.json /user/src/app/
RUN npm install

# Copying source files
COPY . /user/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
