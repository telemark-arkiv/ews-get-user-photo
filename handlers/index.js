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

function resizeImage (src, type, size, callback) {
  var base64resize = require('base64resize')
  var img = 'data:' + type + ';base64,' + src
  var options = {
    src: img,
    width: size,
    height: size,
    withPrefix: false
  }
  console.log(options)
  base64resize(options, function (err, resized) {
    if (err) {
      return callback(err)
    }
    return callback(resized)
  })
}

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

function getUserPhotoResize (request, reply) {
  var httpntlm = require('httpntlm')
  var username = request.params.username
  var size = request.params.size
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
    console.log(response)
    var image = response.body
    var type =  response.headers['content-type']
    base64image(image, username, function (res) {
      resizeImage(res.data, type, size, function (resizedImage) {
        if (err) {
          reply(err)
        }
        res.data = resizedImage
        reply(res)
      })
    })
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.getUserPhoto = getUserPhoto

module.exports.getUserPhotoResize = getUserPhotoResize
