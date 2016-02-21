'use strict'

var config = require('../config')
var validSizes = [
  '48',
  '96',
  '120',
  '240'
]

function generateUrl (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.user) {
    throw new Error('Missing required input: options.user')
  }
  if (options.size && validSizes.indexOf(options.size) === -1) {
    throw new Error('Invalid options.size supplied. Valid sizes are ' + validSizes.join(', '))
  }

  var imgSize = options.size || '48'
  var url = config.url.replace('@username', options.user).replace(/@size/g, imgSize)

  return url
}

module.exports = generateUrl
