# stream-callback

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/stream-callback.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/stream-callback.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/stream-callback/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/stream-callback)
[![Dependency status](http://img.shields.io/david/Kikobeats/stream-callback.svg?style=flat-square)](https://david-dm.org/Kikobeats/stream-callback)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/stream-callback.svg?style=flat-square)](https://david-dm.org/Kikobeats/stream-callback#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/stream-callback.svg?style=flat-square)](https://www.npmjs.org/package/stream-callback)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Turns a stream into a callback.

## Install

```bash
$ npm install stream-callback --save
```

## Usage

```js
var rs = new Readable({objectMode: true})
  rs.push({foo: 'bar'})
  rs.push({foo: 'bar'})
  rs.push(null)

  streamCb(rs, console.log)
  // => { '0': undefined, '1': [ { foo: 'bar' }, { foo: 'bar' } ] }
```

## API

### streamCb(options, cb)

#### options

*Required*<br>
Type: `stream` `object`

##### concatOptions

Type: `object`

##### eosOptions

Type: `object`

#### cb

*Required*<br>
Type: `function`

## License

MIT © [Kiko Beats](http://kikobeats.com)
