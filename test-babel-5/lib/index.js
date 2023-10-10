'use strict';

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

var _foo = require('./foo.esm.js');

var foo = _interopRequire(_foo);

var _bar = require('./bar.esm.js');

var bar = _interopRequire(_bar);

console.log('foo ', foo);
console.log('bar ', bar);