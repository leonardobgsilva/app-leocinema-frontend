FROM node:14-alpine

ARG APP_THEME=red
ENV APP_THEME=$APP_THEME

WORKDIR /app/frontend

COPY ./ ./

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "node ./build.js && npx lite-server"]
