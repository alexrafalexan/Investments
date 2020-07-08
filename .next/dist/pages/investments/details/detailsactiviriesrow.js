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
                statusOfActivityPrev = 'Inactive';
            } else if (details.statusActivity == 1) {
                statusOfActivityPrev = 'Active';
            } else if (details.statusActivity == 2) {
                statusOfActivityPrev = 'Pending';
            } else if (details.statusActivity == 3) {
                statusOfActivityPrev = 'Cancelled';
            } else if (details.statusActivity == 4) {
                statusOfActivityPrev = 'Completed';
            }

            var timeStart = "Investment have not started yet";
            var timeStop = "Investment have not started yet";

            if (details.timeStartActivity == 0) {
                timeStart = 'Investment have not started yet';
                timeStop = 'Investment have not started yet';
            } else {
                timeStart = Intl.DateTimeFormat('en-US', {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit"
                }).format(details.timeStartActivity * 1000);
                timeStop = Intl.DateTimeFormat('en-US', {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit"
                }).format(details.timeStopActivity * 1000);
            }

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, details.perscentagecoverage), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, details.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, details.leftvalue), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, statusOfActivityPrev), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, details.timeSecStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, details.timeSecStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, timeStart), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, timeStop), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newperscentageinactivity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_Button2.default, { color: "red", basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2')))), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newpayment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_Button2.default, { color: "green", basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, '\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE')))), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/changeactivitystatus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_Button2.default, { color: "red", basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, '\u0391\u03BB\u03BB\u03B1\u03B3\u03AE')))));
        }
    }]);

    return DetailsActivitiesRow;
}(_react.Component);

exports.default = DetailsActivitiesRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxpbmsiLCJMYXlvdXQiLCJEZXRhaWxzQWN0aXZpdGllc1JvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwiZGV0YWlscyIsInN0YXR1c09mQWN0aXZpdHlQcmV2Iiwic3RhdHVzQWN0aXZpdHkiLCJ0aW1lU3RhcnQiLCJ0aW1lU3RvcCIsInRpbWVTdGFydEFjdGl2aXR5IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImZvcm1hdCIsInRpbWVTdG9wQWN0aXZpdHkiLCJkZXRhaWwiLCJwZXJzY2VudGFnZWNvdmVyYWdlIiwidmFsdWUiLCJsZWZ0dmFsdWUiLCJ0aW1lU2VjU3RhcnRBY3Rpdml0eSIsInRpbWVTZWNTdG9wQWN0aXZpdHkiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7aUNBQ0k7Z0JBQUEsQUFDQSxNQURBLEFBQ2MsdUJBRGQsQUFDQTtnQkFEQSxBQUNLLE9BREwsQUFDYyx1QkFEZCxBQUNLO3lCQUNXLEtBRmhCLEFBRXFCO2dCQUZyQixBQUVDLFlBRkQsQUFFQztnQkFGRCxBQUVLLGlCQUZMLEFBRUssU0FBdUIsQUFDakM7O2dCQUFJLHVCQUF1QixLQUEzQixBQUFnQyxBQUdoQzs7Z0JBQUksUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDNUI7dUNBQUEsQUFBdUIsQUFDMUI7QUFGRCx1QkFFVSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxB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QUNJLEFBQUMsa0NBQU8sT0FBUixBQUFlLFNBQVMsT0FBeEI7OEJBQUE7Z0NBQUE7QUFBQTtlQXJCaEIsQUFrQkksQUFDSSxBQUNJLEFBQ0ksQUFJWixrRUFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsZ0JBQWxDLEFBQTZDLEtBQW5EOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGtDQUFPLE9BQVIsQUFBZSxPQUFPLE9BQXRCOzhCQUFBO2dDQUFBO0FBQUE7ZUE3QnBCLEFBQ0ksQUF5QkksQUFDSSxBQUNJLEFBQ0ksQUFNcEI7Ozs7O0FBakZpQyxBLEFBbUZsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzYWN0aXZpcmllc3Jvdy5qcyIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9