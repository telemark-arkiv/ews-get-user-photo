'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 2, 'There are 2 different handlers')

tap.ok(handlers.getUserPhoto, 'Handler has method getUserPhoto')

tap.ok(handlers.getPublicResponse, 'Handler has method getPublicResponse')
