FROM node
WORKDIR /usr/local/app/backend
COPY package.json .
RUN yarn install
COPY . .
CMD yarn run start
