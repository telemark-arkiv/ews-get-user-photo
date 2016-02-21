###########################################################
#
# Dockerfile for buddy-minelev-api
#
###########################################################

# Setting the base to nodejs 4.3.1
FROM node:4.3.1-slim

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Environment
ENV EWS_URL "https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=@username@vfk.no&size=HR@sizex@size"
ENV EWS_USER "user"
ENV EWS_PASS "pass"
ENV EWS_DOMAIN "domain"

# Installs git
RUN apt-get update install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js
