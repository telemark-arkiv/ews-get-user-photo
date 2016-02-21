'use strict'

var config = {
  appName: 'ews-get-user-photo',
  appVersion: '1.0.0',
  url: 'https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=@username@vfk.no&size=HR48x48',
  user: 'user',
  pass: 'pass',
  domain: 'domain',
  SERVER_PORT: process.env.SERVER_PORT || 3000
}

module.exports = config

