###########################################################
#
# Dockerfile for buddy-minelev-api
#
###########################################################

# Setting the base to nodejs 4.3.0
FROM mhart/alpine-node:4.3.0

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

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
