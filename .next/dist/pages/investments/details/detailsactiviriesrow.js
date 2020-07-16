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

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

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
                    lineNumber: 55
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, details.perscentagecoverage), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _web2.default.utils.fromWei(details.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _web2.default.utils.fromWei(details.leftvalue, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, statusOfActivityPrev), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, details.timeSecStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, details.timeSecStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, timeStart), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, timeStop), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newperscentageinactivity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_Button2.default, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, '\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2')))), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/changeactivitystatus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_Button2.default, { color: "red", basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, '\u0391\u03BB\u03BB\u03B1\u03B3\u03AE')))), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newpayment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_Button2.default, { color: "green", basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, '\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE')))));
        }
    }]);

    return DetailsActivitiesRow;
}(_react.Component);

exports.default = DetailsActivitiesRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxpbmsiLCJ3ZWIzIiwiTGF5b3V0IiwiRGV0YWlsc0FjdGl2aXRpZXNSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsImRldGFpbHMiLCJzdGF0dXNPZkFjdGl2aXR5UHJldiIsInN0YXR1c0FjdGl2aXR5IiwidGltZVN0YXJ0IiwidGltZVN0b3AiLCJ0aW1lU3RhcnRBY3Rpdml0eSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJmb3JtYXQiLCJ0aW1lU3RvcEFjdGl2aXR5IiwiZGV0YWlsIiwicGVyc2NlbnRhZ2Vjb3ZlcmFnZSIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwibGVmdHZhbHVlIiwidGltZVNlY1N0YXJ0QWN0aXZpdHkiLCJ0aW1lU2VjU3RvcEFjdGl2aXR5IiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUTs7QUFDUixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7OztpQ0FDSTtnQkFBQSxBQUNBLE1BREEsQUFDYyx1QkFEZCxBQUNBO2dCQURBLEFBQ0ssT0FETCxBQUNjLHVCQURkLEFBQ0s7eUJBQ1csS0FGaEIsQUFFcUI7Z0JBRnJCLEFBRUMsWUFGRCxBQUVDO2dCQUZELEFBRUssaUJBRkwsQUFFSyxTQUF1QixBQUNqQzs7Z0JBQUksdUJBQXVCLEtBQTNCLEFBQWdDLEFBR2hDOztnQkFBSSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUM1Qjt1Q0FBQSxBQUF1QixB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LDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsZ0JBQWxDLEFBQTZDLEtBQW5EOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGtDQUFPLE9BQVIsQUFBZSxPQUFPLE9BQXRCOzhCQUFBO2dDQUFBO0FBQUE7ZUFyQmhCLEFBa0JJLEFBQ0ksQUFDSSxBQUNJLEFBSVosNERBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx5QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLGdCQUFsQyxBQUE2QyxLQUFuRDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxrQ0FBTyxPQUFSLEFBQWUsU0FBUyxPQUF4Qjs4QkFBQTtnQ0FBQTtBQUFBO2VBN0JwQixBQUNJLEFBeUJJLEFBQ0ksQUFDSSxBQUNJLEFBTXBCOzs7OztBQWpGaUMsQSxBQW1GbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==