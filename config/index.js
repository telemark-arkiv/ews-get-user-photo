'use strict'

var config = {
  appName: 'ews-get-user-photo',
  appVersion: '1.0.0',
  url: process.env.EWS_URL || 'https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=@username@vfk.no&size=HR48x48',
  user: process.env.EWS_USER || 'user',
  pass: process.env.EWS_PASS || 'pass',
  domain: process.env.EWS_DOMAIN || 'domain',
  SERVER_PORT: process.env.SERVER_PORT || 3000
}

module.exports = config

