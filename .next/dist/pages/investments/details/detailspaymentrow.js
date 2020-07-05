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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailspaymentrow.js';


var DetailsPaymentrowRow = function (_Component) {
    (0, _inherits3.default)(DetailsPaymentrowRow, _Component);

    function DetailsPaymentrowRow() {
        (0, _classCallCheck3.default)(this, DetailsPaymentrowRow);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsPaymentrowRow.__proto__ || (0, _getPrototypeOf2.default)(DetailsPaymentrowRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsPaymentrowRow, [{
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
                    lineNumber: 13
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, details.activityNumber), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, details.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, details.organizationmakepayment), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, details.seller));
        }
    }]);

    return DetailsPaymentrowRow;
}(_react.Component);

exports.default = DetailsPaymentrowRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc3BheW1lbnRyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxpbmsiLCJMYXlvdXQiLCJEZXRhaWxzUGF5bWVudHJvd1JvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwiZGV0YWlscyIsImFjdGl2aXR5TnVtYmVyIiwidmFsdWUiLCJkZXRhaWwiLCJvcmdhbml6YXRpb25tYWtlcGF5bWVudCIsInNlbGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUTs7QUFDUixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O2lDQUNPO2dCQUFBLEFBQ0csTUFESCxBQUNpQix1QkFEakIsQUFDRztnQkFESCxBQUNRLE9BRFIsQUFDaUIsdUJBRGpCLEFBQ1E7eUJBQ1MsS0FGakIsQUFFc0I7Z0JBRnRCLEFBRUUsWUFGRixBQUVFO2dCQUZGLEFBRU0saUJBRk4sQUFFTSxTQUF1QixBQUVsQzs7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZixpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFISixBQUdJLEFBQWUsQUFDZix3QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFKSixBQUlJLEFBQWUsQUFDZix5QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFMSixBQUtJLEFBQWUsQUFDZiwwQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFQUixBQUNJLEFBTUksQUFBZSxBQUcxQjs7Ozs7QUFmOEIsQSxBQWlCbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc3BheW1lbnRyb3cuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==