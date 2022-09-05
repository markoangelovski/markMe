FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install --omit=dev

COPY . /app

EXPOSE 3001

CMD ["node", "api/app.js"]