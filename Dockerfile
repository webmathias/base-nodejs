FROM node:8.9-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
RUN mv node_modules ../