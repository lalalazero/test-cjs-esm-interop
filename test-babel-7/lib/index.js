"use strict";

var _fooEsm = _interopRequireDefault(require("./foo.esm.js"));
var _barEsm = _interopRequireDefault(require("./bar.esm.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log('foo ', _fooEsm["default"]);
console.log('bar ', _barEsm["default"]);