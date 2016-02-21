'use strict'

var handlers = require('../handlers')
var Joi = require('joi')

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse
  },
  {
    method: 'GET',
    path: '/{username}/photo',
    handler: handlers.getUserPhoto,
    config: {
      description: 'Return base64 of users photo',
      validate: {
        params: {
          username: Joi.string().min(3).max(40).required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/{username}/photo/{size}',
    handler: handlers.getUserPhoto,
    config: {
      description: 'Return base64 of users photo',
      validate: {
        params: {
          username: Joi.string().min(3).max(40).required(),
          size: Joi.string().min(2).max(3)
        }
      }
    }
  }
]

module.exports = routes
