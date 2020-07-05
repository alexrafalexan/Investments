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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsactiviriesrow.js';


var DetailsActivitiesRow = function (_Component) {
    (0, _inherits3.default)(DetailsActivitiesRow, _Component);

    function DetailsActivitiesRow() {
        (0, _classCallCheck3.default)(this, DetailsActivitiesRow);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsActivitiesRow.__proto__ || (0, _getPrototypeOf2.default)(DetailsActivitiesRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsActivitiesRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                details = _props.details; //209 -- 4:38

            var statusOfActivityPrev = this.props;

            if (details.statusActivity == 0) {
                statusOfActivityPrev = 'Inactive'; //Προσθήκη Συνθηκών σε δεύτερο χρόνο
            } else if (details.statusActivity == 1) {
                statusOfActivityPrev = 'Active';
            } else if (details.statusActivity == 2) {
                statusOfActivityPrev = 'Pending';
            } else if (details.statusActivity == 3) {
                statusOfActivityPrev = 'Cancelled';
            } else if (details.statusActivity == 4) {
                statusOfActivityPrev = 'Completed';
            }

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, details.perscentagecoverage), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, details.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, details.leftvalue), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, statusOfActivityPrev), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, details.timeSecStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, details.timeSecStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, details.timeStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, details.timeStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_Button2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, '\u039B\u03B5\u03C0\u03C1\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2')));
        }
    }]);

    return DetailsActivitiesRow;
}(_react.Component);

exports.default = DetailsActivitiesRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkRldGFpbHNBY3Rpdml0aWVzUm93IiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJkZXRhaWxzIiwic3RhdHVzT2ZBY3Rpdml0eVByZXYiLCJzdGF0dXNBY3Rpdml0eSIsImRldGFpbCIsInBlcnNjZW50YWdlY292ZXJhZ2UiLCJ2YWx1ZSIsImxlZnR2YWx1ZSIsInRpbWVTZWNTdGFydEFjdGl2aXR5IiwidGltZVNlY1N0b3BBY3Rpdml0eSIsInRpbWVTdGFydEFjdGl2aXR5IiwidGltZVN0b3BBY3Rpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUTs7QUFDUixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7OztpQ0FDSTtnQkFBQSxBQUNBLE1BREEsQUFDYyx1QkFEZCxBQUNBO2dCQURBLEFBQ0ssT0FETCxBQUNjLHVCQURkLEFBQ0s7eUJBQ1csS0FGaEIsQUFFcUI7Z0JBRnJCLEFBRUMsWUFGRCxBQUVDO2dCQUZELEFBRUssaUJBRkwsQUFFSyxTQUF1QixBQUVqQzs7Z0JBQUksdUJBQXVCLEtBQTNCLEFBQWdDLEFBR2hDOztnQkFBSSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUM1Qjt1Q0FENEIsQUFDNUIsQUFBdUIsWUFBYSxBQUN2QztBQUZELHVCQUVVLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkssYUFBQSxVQUVJLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkssYUFBQSxVQUVJLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkssYUFBQSxNQUVBLElBQUksUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDbEM7dUNBQUEsQUFBdUIsQUFDMUI7QUFFSjs7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDQztBQUREO0FBQUEsYUFBQSxrQkFDRSxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURELEFBQ0MsQUFDRyxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZix5QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFISixBQUdJLEFBQWUsQUFDZixzQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFKSixBQUlJLEFBQWUsQUFDZix3QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFMSixBQUtJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQU5KLEFBTUksQUFDQSx1Q0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFQSixBQU9JLEFBQWUsQUFDZix1Q0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFSSixBQVFJLEFBQWUsQUFDZixzQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFUSixBQVNJLEFBQWUsQUFDZixvQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFWSixBQVVJLEFBQWUsQUFDZixtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsZUFiWixBQUNJLEFBV0ksQUFDSSxBQUlaOzs7OztBQXJDaUMsQSxBQXVDbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==