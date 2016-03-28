/* global it */

'use strict'

require('should')
var Readable = require('readable-stream')
var streamCb = require('..')

it('works fine', function (done) {
  var rs = new Readable({objectMode: true})
  rs.push({foo: 'bar'})
  rs.push({foo: 'bar'})
  rs.push(null)

  streamCb(rs, function (err, data) {
    data.length.should.be.equal(2)
    done(err)
  })
})
