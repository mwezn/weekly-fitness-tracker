FROM node:12.18.4
WORKDIR /code/server
COPY . /code
EXPOSE 3000
CMD ["npm install", "&&", "npm start"]
