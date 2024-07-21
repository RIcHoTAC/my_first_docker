FROM node:lts-alpine as base
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

FROM base as build
RUN yarn run build

FROM base as dev
CMD yarn run dev

FROM nginx:latest as prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]