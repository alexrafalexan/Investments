'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _investment = require('../../../ethproject/investment');

var _investment2 = _interopRequireDefault(_investment);

var _detailsactiviriesrow = require('./detailsactiviriesrow');

var _detailsactiviriesrow2 = _interopRequireDefault(_detailsactiviriesrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsactivities.js?entry';


var DetailsActivities = function (_Component) {
    (0, _inherits3.default)(DetailsActivities, _Component);

    function DetailsActivities() {
        (0, _classCallCheck3.default)(this, DetailsActivities);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsActivities.__proto__ || (0, _getPrototypeOf2.default)(DetailsActivities)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsActivities, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.activitiesTable.map(function (details, index) {
                return _react2.default.createElement(_detailsactiviriesrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this2.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 Activity'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/newactivity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 Activity'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, '\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03CC \u039A\u03AC\u03BB\u03B7\u03C8\u03B7\u03C2 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, '\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CC \u03A0\u03BF\u03C3\u03CC Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, '\u0394\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF \u03A0\u03BF\u03C3\u03CC Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, '\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, '\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 Activity (\u03A7\u03C1\u03BF\u03BD. \u0394\u03B9\u03AC\u03BA\u03B5\u03B9\u03B1)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, '\u039B\u03AE\u03BE\u03B7 Activity (\u03A7\u03C1\u03BF\u03BD. \u0394\u03B9\u03AC\u03BA\u03B5\u03B9\u03B1)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, '\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, '\u039B\u03AE\u03BE\u03B7 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\u0394\u03B9\u03B1\u03BC\u03CC\u03C1\u03C6\u03BF\u03C3\u03B7 \u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03BF\u03CD \u039A\u03AC\u03BB\u03C5\u03C8\u03B7\u03C2'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, investment, activitiesTableCount, activitiesTable;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context.next = 4;
                                return investment.methods.getActivitiesTableCount().call();

                            case 4:
                                activitiesTableCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(activitiesTableCount)).fill().map(function (element, index) {
                                    return investment.methods.activitiesTable(index).call();
                                }));

                            case 7:
                                activitiesTable = _context.sent;
                                return _context.abrupt('return', { address: address, activitiesTable: activitiesTable, activitiesTableCount: activitiesTableCount });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return DetailsActivities;
}(_react.Component);

exports.default = DetailsActivities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXRpZXMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc0FjdGl2aXRpZXNSb3ciLCJEZXRhaWxzQWN0aXZpdGllcyIsInByb3BzIiwiYWN0aXZpdGllc1RhYmxlIiwibWFwIiwiZGV0YWlscyIsImluZGV4IiwiYWRkcmVzcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiaW52ZXN0bWVudCIsIm1ldGhvZHMiLCJnZXRBY3Rpdml0aWVzVGFibGVDb3VudCIsImNhbGwiLCJhY3Rpdml0aWVzVGFibGVDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVE7O0FBQ2hCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUEwQjs7Ozs7Ozs7O0lBRTNCLEE7Ozs7Ozs7Ozs7O3FDQWFXO3lCQUNUOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN0RDt1Q0FBTyxBQUFDO3lCQUFELEFBQ0YsQUFDTDt3QkFGTyxBQUVELEFBQ047NkJBSE8sQUFHRSxBQUNUOzZCQUFTLE9BQUEsQUFBSyxNQUpQLEFBSWE7O2tDQUpiO29DQUFQLEFBQU8sQUFNVjtBQU5VO0FBQ1AsaUJBRE87QUFEWCxBQUFPLEFBUVYsYUFSVTs7OztpQ0FVSDtnQkFBQSxBQUNHLFNBREgsQUFDb0MsdUJBRHBDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQ29DLHVCQURwQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQ29DLHVCQURwQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDb0MsdUJBRHBDLEFBQzRCLEFBRWhDOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxzR0FBQSxBQUFDLDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBSlosQUFFSSxBQUNJLEFBQ0ksQUFHUixnRkFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLHVGQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSxtSEFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsdUdBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLDZHQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSwyRUFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFQSixBQU9JLEFBQ0EseUlBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUkosQUFRSSxBQUNBLDZIQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVRKLEFBU0ksQUFDQSxrRUFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFWSixBQVVJLEFBQ0Esc0RBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBYlosQUFDSSxBQUNJLEFBV0ksQUFHUiwrS0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkF4QlosQUFDSSxBQU9JLEFBZ0JJLEFBQ0ssQUFBSyxBQUt6Qjs7Ozs7aUgsQUF4RDRCOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTUFBbEIsQSxBQUNGO0EsNkNBQWEsMEJBQUEsQUFBVyxBOzt1Q0FDSyxXQUFBLEFBQVcsUUFBWCxBQUFtQiwwQkFBbkIsQUFBNkMsQTs7aUNBQTFFO0E7O3lEQUN3QixBQUFRLFVBQzlCLFNBQU4sQUFBTSxBQUFTLHVCQUFmLEFBQXNDLE9BQXRDLEFBQTZDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQzlEOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGdCQUFuQixBQUFtQyxPQUExQyxBQUFPLEFBQTBDLEFBQ3BEO0FBSDJCLEFBQzVCLEEsaUNBQUEsQ0FENEI7O2lDQUF4QjtBO2lFQUtDLEVBQUMsU0FBRCxTQUFVLGlCQUFWLGlCQUEyQixzQixBQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZpQixBLEFBNERoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzYWN0aXZpdGllcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9