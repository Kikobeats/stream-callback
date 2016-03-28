'use strict'

var concat = require('concat-stream')
var isStream = require('is-stream')
var after = require('lodash.after')
var eos = require('end-of-stream')

function streamCallback (opts, cb) {
  if (isStream(opts)) opts = { stream: opts }
  if (!opts.stream || !cb) throw new Error('Need to provide a stream and a callback.')

  var concatStream = concat(opts.concatOptions, concatCb)
  var _data
  var _error

  var done = after(2, function () {
    return cb(_error, _data)
  })

  opts.stream.pipe(concatStream)

  function concatCb (data) {
    _data = data
    done()
  }

  eos(opts.stream, opts.eosOptions, endCb)

  function endCb (error) {
    _error = error
    done()
  }
}

module.exports = streamCallback
