'use strict';

var _fooEsm = require('./foo.esm.js');

var _fooEsm2 = _interopRequireDefault(_fooEsm);

var _barEsm = require('./bar.esm.js');

var _barEsm2 = _interopRequireDefault(_barEsm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('foo ', _fooEsm2.default);
console.log('bar ', _barEsm2.default);