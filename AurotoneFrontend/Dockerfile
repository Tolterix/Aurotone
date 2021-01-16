FROM alpine:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY . ./app/src

RUN apk add --update nodejs npm \
    && npm install

EXPOSE 33033

CMD npm start
