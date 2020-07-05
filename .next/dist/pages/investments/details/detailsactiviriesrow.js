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
                    lineNumber: 28
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, details.perscentagecoverage), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, details.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, details.leftvalue), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, statusOfActivityPrev), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, details.timeSecStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, details.timeSecStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, details.timeStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, details.timeStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newperscentageinactivity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_Button2.default, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2')))));
        }
    }]);

    return DetailsActivitiesRow;
}(_react.Component);

exports.default = DetailsActivitiesRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxpbmsiLCJMYXlvdXQiLCJEZXRhaWxzQWN0aXZpdGllc1JvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwiZGV0YWlscyIsInN0YXR1c09mQWN0aXZpdHlQcmV2Iiwic3RhdHVzQWN0aXZpdHkiLCJkZXRhaWwiLCJwZXJzY2VudGFnZWNvdmVyYWdlIiwidmFsdWUiLCJsZWZ0dmFsdWUiLCJ0aW1lU2VjU3RhcnRBY3Rpdml0eSIsInRpbWVTZWNTdG9wQWN0aXZpdHkiLCJ0aW1lU3RhcnRBY3Rpdml0eSIsInRpbWVTdG9wQWN0aXZpdHkiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7aUNBQ0k7Z0JBQUEsQUFDQSxNQURBLEFBQ2MsdUJBRGQsQUFDQTtnQkFEQSxBQUNLLE9BREwsQUFDYyx1QkFEZCxBQUNLO3lCQUNXLEtBRmhCLEFBRXFCO2dCQUZyQixBQUVDLFlBRkQsQUFFQztnQkFGRCxBQUVLLGlCQUZMLEFBRUssU0FBdUIsQUFFakM7O2dCQUFJLHVCQUF1QixLQUEzQixBQUFnQyxBQUdoQzs7Z0JBQUksUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDNUI7dUNBRDRCLEFBQzVCLEFBQXVCLFlBQWEsQUFDdkM7QUFGRCx1QkFFVSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUNsQzt1Q0FBQSxBQUF1QixBQUMxQjtBQUZLLGFBQUEsVUFFSSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUNsQzt1Q0FBQSxBQUF1QixBQUMxQjtBQUZLLGFBQUEsVUFFSSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUNsQzt1Q0FBQSxBQUF1QixBQUMxQjtBQUZLLGFBQUEsTUFFQSxJQUFJLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRUo7O21DQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0M7QUFERDtBQUFBLGFBQUEsa0JBQ0UsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsZUFERCxBQUNDLEFBQ0cscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBRkosQUFFSSxBQUFlLEFBQ2YseUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBSEosQUFHSSxBQUFlLEFBQ2Ysc0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBSkosQUFJSSxBQUFlLEFBQ2Ysd0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBTEosQUFLSSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsZUFOSixBQU1JLEFBQ0EsdUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBUEosQUFPSSxBQUFlLEFBQ2YsdUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBUkosQUFRSSxBQUFlLEFBQ2Ysc0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBVEosQUFTSSxBQUFlLEFBQ2Ysb0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBVkosQUFVSSxBQUFlLEFBQ2YsbUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx5QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLGdCQUFsQyxBQUE2QyxLQUFuRDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxrQ0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFmcEIsQUFDSSxBQVdJLEFBQ0ksQUFDSSxBQUNJLEFBTXBCOzs7OztBQXpDaUMsQSxBQTJDbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==