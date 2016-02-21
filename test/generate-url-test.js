'use strict'

var tap = require('tap')
var generateUrl = require('../lib/generate-url')

tap.throws(
  function () {
    generateUrl()
  },
  {message: 'Missing required input: options object'},
  'Throws if options object not supplied'
)

tap.throws(
  function () {
    var options = {
      size: '48'
    }
    generateUrl(options)
  },
  {message: 'Missing required input: options.user'},
  'Throws if options.user not supplied'
)

tap.throws(
  function () {
    var options = {
      user: 'peter',
      size: '480'
    }
    generateUrl(options)
  },
  {message: 'Invalid options.size supplied. Valid sizes are 48, 96, 120, 240'},
  'Throws if options.size is invalid'
)

tap.test('It return expected result', function (test) {
  var options = {
    user: 'peter',
    size: '48'
  }
  var expected = 'https://epost.vfk.no/ews/Exchange.asmx/s/GetUserPhoto?email=peter@vfk.no&size=HR48x48'
  var result = generateUrl(options)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Generated URL OK')
  test.done()
})
