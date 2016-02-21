'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 3, 'There are 3 different routes')
