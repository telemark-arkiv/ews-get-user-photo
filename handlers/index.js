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

function resizeImage (src, type, size, callback) {
  var base64resize = require('base64resize')
  var img = 'data:' + type + ';base64,' + src
  var options = {
    src: img,
    width: size,
    height: size,
    withPrefix: false
  }
  base64resize(options, function (err, resized) {
    if (err) {
      return callback(err)
    }
    return callback(resized)
  })
}

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
  httpntlm.get(options, function (error, response) {
    if (!size) {
      reply(error || base64image(response.body, username))
    } else {
      resizeImage(response.body, response.headers['content-type'], size, function (err, resizedImage) {
        reply(err || base64image(resizedImage, username))
      })
    }
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.getUserPhoto = getUserPhoto
