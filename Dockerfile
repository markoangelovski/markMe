FROM node:current-alpine 

# Prepare working directory
RUN mkdir -p markme
WORKDIR /markme

# Copy api and client package.json files
COPY package*.json /markme/

# Install api and next js dependencies
RUN npm install

# Copy all files and .next, api and public folders
COPY . /markme

CMD ["npm","run","local"]