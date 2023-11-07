FROM node:21-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node . /usr/src/app/
RUN npm ci --only=production

USER node
CMD [ "node", "./bin/server.js" ]