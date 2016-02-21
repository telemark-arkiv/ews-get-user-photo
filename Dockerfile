###########################################################
#
# Dockerfile for buddy-minelev-api
#
###########################################################

# Setting the base to nodejs 4.3.1
FROM mhart/alpine-node:4.3.1

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Environment
ENV EWS_URL "https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=@username@vfk.no&size=HR48x48"
ENV EWS_USER "user"
ENV EWS_PASS "pass"
ENV EWS_DOMAIN "domain"

# Installs git
RUN apk add --update git libjpeg cairo-dev pango giflib g++ make && rm -rf /var/cache/apk/*

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
