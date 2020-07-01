'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Investment = require('./build/Investment.json');

var _Investment2 = _interopRequireDefault(_Investment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Investment2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aHByb2plY3RcXGludmVzdG1lbnQuanMiXSwibmFtZXMiOlsid2ViMyIsIkludmVzdG1lbnQiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF1QixBQUF2QixBQUdBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDMUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyxxQkFBVyxBQUF0QixBQURLLFlBRUgsQUFGRyxBQUFQLEFBSUQ7QUFMRCIsImZpbGUiOiJpbnZlc3RtZW50LmpzIiwic291cmNlUm9vdCI6IkU6L015RmlsZXMvUGFwZWkvSW52ZXN0bWVudHMifQ==