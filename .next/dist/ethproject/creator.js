'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Application = require('./build/Application.json');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inst = new _web2.default.eth.Contract(JSON.parse(_Application2.default.interface), '0xAd0987C83dd94Fb3EFBf8b70C97399d63F0BdeC3');

exports.default = inst;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aHByb2plY3RcXGNyZWF0b3IuanMiXSwibmFtZXMiOlsid2ViMyIsIkFwcGxpY2F0aW9uIiwiaW5zdCIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBd0IsQUFBeEI7Ozs7OztBQUVBLElBQU0sT0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDVCxLQUFLLEFBQUwsTUFBVyxzQkFBWSxBQUF2QixBQURTLFlBRVQsQUFGUyxBQUFiLEFBS0E7O2tCQUFnQixBQUFoQiIsImZpbGUiOiJjcmVhdG9yLmpzIiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=