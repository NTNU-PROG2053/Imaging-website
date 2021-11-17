FROM node:16.11.1

COPY package.json ./
COPY package-lock.json ./

RUN npm install