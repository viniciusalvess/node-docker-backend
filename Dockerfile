FROM node:14

WORKDIR /usr/src/app

#ENV PORT 3000
#ENV NODE_ENV production

#RUN mkdir -p /usr/src/app
#RUN apk add --no-cache libc6-compat




#VOLUME /usr/src/app

#RUN rm -rf ./*

ADD package*.json ./
ADD ecosystem.config.js ./

ADD .env ./
ADD src ./src
ADD index.js ./

RUN npm install pm2 -g
RUN yarn install

RUN ls -a -R

EXPOSE 3000
