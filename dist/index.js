
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sweetswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./sweetswap-sdk.cjs.development.js')
}
