FROM node:boron

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN yarn install 
RUN yarn run build
RUN cd server && yarn install && yarn build

EXPOSE 8080

CMD [ "yarn", "deploy" ]

