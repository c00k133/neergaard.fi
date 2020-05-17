FROM node:latest
RUN npm install --production node-sass pug-cli

#FROM ubuntu:18.04
#
#RUN apt-get update
#RUN apt-get install --yes curl
#RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
#RUN apt-get install --yes nodejs
#RUN npm install --global --production node-sass pug-cli
