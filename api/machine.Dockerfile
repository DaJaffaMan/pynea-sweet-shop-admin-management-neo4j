FROM node:18.17.0-alpine3.18 as build

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY api/package.json .
COPY api/package-lock.json .
COPY api/tsconfig.build.json .
COPY api/tsconfig.json .
COPY api/nest-cli.json .

FROM build as development
RUN npm i
# HEALTHCHECK --start-period=5s \
#     CMD "curl -f http://localhost:4000/health || exit 1"

COPY ./api/src ./src

EXPOSE 4000

CMD [ "npm", "run", "start:debug" ]
