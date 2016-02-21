'use strict'

var config = require('../config')
var generateUrl = require('../lib/generate-url')

/*!
 *
 * Public
 *
 */

function getPublicResponse (request, reply) {
  var message = {
    message: '(Nothing but) Flowers'
  }
  reply(message)
}

/*!
 *
 * EWS
 *
 */

function base64image (image, username) {
  var res = {
    username: username,
    data: new Buffer(image).toString('base64')
  }
  return res
}

function getUserPhoto (request, reply) {
  var httpntlm = require('httpntlm')
  var username = request.params.username
  var size = request.params.size
  var url = generateUrl({
    user: username,
    size: size
  })
  var options = {
    url: url,
    username: config.user,
    password: config.pass,
    domain: config.domain,
    binary: true
  }
  httpntlm.get(options, function (err, response) {
    reply(err || base64image(response.body, username))
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.getUserPhoto = getUserPhoto
