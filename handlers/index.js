'use strict'

var config = require('../config')

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

function base64image (image, username, callback) {
  var res = {
    username: username,
    data: new Buffer(image).toString('base64')
  }
  return callback(res)
}

function getUserPhoto (request, reply) {
  var httpntlm = require('httpntlm')
  var username = request.params.username
  var url = config.url.replace('@username', username)
  var options = {
    url: url,
    username: config.user,
    password: config.pass,
    domain: config.domain,
    binary: true
  }
  httpntlm.get(options, function (err, response) {
    if (err) {
      reply(err)
    }
    var image = response.body
    base64image(image, username, function (res) {
      reply(res)
    })
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.getUserPhoto = getUserPhoto
