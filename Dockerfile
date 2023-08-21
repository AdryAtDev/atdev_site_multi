FROM node:18-alpine
COPY . ./src
WORKDIR /src
RUN npm install
RUN npm install -D @11ty/eleventy
EXPOSE 9090
ENTRYPOINT ["npm", "start"]
