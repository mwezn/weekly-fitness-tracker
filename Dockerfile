FROM node:12.18.4

WORKDIR /code
COPY . /code
EXPOSE 3000
CMD ["bash", "-c", "cd", "server", "&&", "npm install", "&&", "npm start"]
