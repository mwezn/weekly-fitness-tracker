FROM node:12.18.4

WORKDIR /code
COPY . /code
EXPOSE 3000
CMD ["cd", "server", "&&", "npm install", "&&", "npm start"]
