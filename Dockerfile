FROM node:latest as builder

WORKDIR /var/www/

COPY . /var/www

RUN npm install -g @angular/cli
RUN npm install
RUN ng build --prod


FROM nginx:1.15.1-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /var/www/dist/balpass /var/www

