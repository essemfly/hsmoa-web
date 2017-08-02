FROM node:boron

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN yarn install 
RUN yarn run build

EXPOSE 8080