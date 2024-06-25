# Dockerfile for management service
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 50051

CMD [ "npm", "start" ]