'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Button = require('semantic-ui-react/dist/commonjs/elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _investment = require('../../../ethproject/investment');

var _investment2 = _interopRequireDefault(_investment);

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsinvenstorsrow.js';


var DetailsInvenstorsRow = function (_Component) {
    (0, _inherits3.default)(DetailsInvenstorsRow, _Component);

    function DetailsInvenstorsRow() {
        (0, _classCallCheck3.default)(this, DetailsInvenstorsRow);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsInvenstorsRow.__proto__ || (0, _getPrototypeOf2.default)(DetailsInvenstorsRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsInvenstorsRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                details = _props.details; //209 -- 4:38

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, details));
        }
    }]);

    return DetailsInvenstorsRow;
}(_react.Component);

exports.default = DetailsInvenstorsRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2ludmVuc3RvcnNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkludmVzdG1lbnQiLCJ3ZWIzIiwiRGV0YWlsc0ludmVuc3RvcnNSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVE7O0FBQ1IsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBOzs7Ozs7Ozs7OztpQ0FFTztnQkFBQSxBQUVHLE1BRkgsQUFFaUIsdUJBRmpCLEFBRUc7Z0JBRkgsQUFFUSxPQUZSLEFBRWlCLHVCQUZqQixBQUVRO3lCQUNTLEtBSGpCLEFBR3NCO2dCQUh0QixBQUdFLFlBSEYsQUFHRTtnQkFIRixBQUdNLGlCQUhOLEFBR00sU0FBdUIsQUFFbEM7O21DQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsZUFESixBQUNJLEFBQ0EscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsZUFIUixBQUNJLEFBRUksQUFHWDs7Ozs7QUFiOEIsQSxBQWVuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzaW52ZW5zdG9yc3Jvdy5qcyIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9