FROM node:12.18.4
WORKDIR /code
COPY . /code
WORKDIR /code/server
EXPOSE 3000
CMD ["bash", "-c", "npm", "install"]
CMD ["bash", "-c", "npm", "start"]
