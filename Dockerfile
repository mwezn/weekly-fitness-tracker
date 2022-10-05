FROM node:12.18.4
RUN mkdir /code
WORKDIR /code
COPY . .
RUN cd /code/server
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]


