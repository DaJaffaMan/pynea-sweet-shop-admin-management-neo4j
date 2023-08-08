FROM node:18.17.0-alpine3.18 as build

WORKDIR /usr/app/src

COPY --chown=node:node ./src/ ./src
COPY --chown=node:node ./package*.json .
COPY --chown=node:node ./tsconfig*.json .
COPY --chown=node:node ./nest-cli.json .

HEALTHCHECK --start-period=5s \
    CMD "curl -f http://localhost:4000/health || exit 1"

EXPOSE 4000

FROM build as development 

RUN npm run install:start:dev

FROM build as production

RUN npm run start:prod