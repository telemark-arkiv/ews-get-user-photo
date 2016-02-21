'use strict'

process.env.EWS_URL = 'https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=@username@vfk.no&size=HR@sizex@size'
process.env.EWS_USER = 'telemark'
process.env.EWS_PASS = 'Tvspill1'
process.env.EWS_DOMAIN = 'login'

var config = {
  appName: 'ews-get-user-photo',
  appVersion: '2.0.0',
  url: process.env.EWS_URL || 'https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=@username@vfk.no&size=HR@sizex@size',
  user: process.env.EWS_USER || 'user',
  pass: process.env.EWS_PASS || 'pass',
  domain: process.env.EWS_DOMAIN || 'domain',
  SERVER_PORT: process.env.SERVER_PORT || 3000
}

module.exports = config

