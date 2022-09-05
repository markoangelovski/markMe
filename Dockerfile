FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install --omit=dev

COPY . /app

EXPOSE 3000

CMD ["node", "api/app.js"]