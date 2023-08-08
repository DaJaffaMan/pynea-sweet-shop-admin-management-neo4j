FROM node:18.17.0-alpine3.18 as build

WORKDIR /usr/app/src

COPY --chown=node:node ./dist ./
COPY .env ./
COPY package*.json ./

HEALTHCHECK --start-period=5s \
    CMD "curl -f http://localhost:4000/health || exit 1"

EXPOSE 4000

FROM build as development 
COPY tsconfig*.json ./

RUN npm i
RUN npm run start:debug

FROM build as production

RUN npm ci --only=production
RUN npm run start:prod
