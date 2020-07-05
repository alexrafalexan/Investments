'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailspayment.js?entry';


var DetailsActivities = function (_Component) {
    (0, _inherits3.default)(DetailsActivities, _Component);

    function DetailsActivities() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DetailsActivities);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsActivities.__proto__ || (0, _getPrototypeOf2.default)(DetailsActivities)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var account, investment;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                account = _context.sent;
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 7;
                                return investment.methods.G_checkStatusOfActivities().send({
                                    from: account[0]
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DetailsActivities, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this3 = this;

            return this.props.activitiesTable.map(function (details, index) {
                return _react2.default.createElement(_detailsactiviriesrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
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
                    lineNumber: 46
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 Activity'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/newactivity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 Activity'))), _react2.default.createElement(_semanticUiReact.Button, { color: "red", basic: true, onClick: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, '\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 Activities'), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, '\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03CC \u039A\u03AC\u03BB\u03B7\u03C8\u03B7\u03C2 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, '\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CC \u03A0\u03BF\u03C3\u03CC Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, '\u0394\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF \u03A0\u03BF\u03C3\u03CC Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, '\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 Activity (\u03A7\u03C1\u03BF\u03BD. \u0394\u03B9\u03AC\u03BA\u03B5\u03B9\u03B1)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, '\u039B\u03AE\u03BE\u03B7 Activity (\u03A7\u03C1\u03BF\u03BD. \u0394\u03B9\u03AC\u03BA\u03B5\u03B9\u03B1)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, '\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, '\u039B\u03AE\u03BE\u03B7 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, '\u0394\u03B9\u03B1\u03BC\u03CC\u03C1\u03C6\u03BF\u03C3\u03B7 \u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03BF\u03CD \u039A\u03AC\u03BB\u03C5\u03C8\u03B7\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, '\u03A0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B5 \u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, activitiesTableCount, activitiesTable;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context2.next = 4;
                                return investment.methods.getActivitiesTableCount().call();

                            case 4:
                                activitiesTableCount = _context2.sent;
                                _context2.next = 7;
                                return _promise2.default.all(Array(parseInt(activitiesTableCount)).fill().map(function (element, index) {
                                    return investment.methods.activitiesTable(index).call();
                                }));

                            case 7:
                                activitiesTable = _context2.sent;
                                return _context2.abrupt('return', { address: address, activitiesTable: activitiesTable, activitiesTableCount: activitiesTableCount });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return DetailsActivities;
}(_react.Component);

exports.default = DetailsActivities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc3BheW1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc0FjdGl2aXRpZXNSb3ciLCJ3ZWIzIiwiRGV0YWlsc0FjdGl2aXRpZXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsIkdfY2hlY2tTdGF0dXNPZkFjdGl2aXRpZXMiLCJzZW5kIiwiZnJvbSIsImFjdGl2aXRpZXNUYWJsZSIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0QWN0aXZpdGllc1RhYmxlQ291bnQiLCJjYWxsIiwiYWN0aXZpdGllc1RhYmxlQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs7Ozs7c08sQUFhRjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47NkJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBRE8sQUFDUCxBQUFNO2dEQURDO3VDQUVlLGNBQUEsQUFBSyxJQUZwQixBQUVlLEFBQVM7O2lDQUF6QjtBQUZDLG1EQUdEO0FBSEMsNkNBR1ksMEJBQVcsTUFBQSxBQUFLLE1BSDVCLEFBR1ksQUFBc0I7Z0RBSGxDO2tEQUlELEFBQVcsUUFBWCxBQUFtQiw0QkFBbkIsQUFBK0M7MENBQzNDLFFBTEgsQUFJRCxBQUFvRCxBQUNoRCxBQUFRO0FBRHdDLEFBQ3RELGlDQURFOztpQ0FKQztpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBOzs7Ozs7Ozs7O3FDQVNFO3lCQUNUOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN0RDt1Q0FBTyxBQUFDO3lCQUFELEFBQ0UsQUFDTDt3QkFGRyxBQUVHLEFBQ047NkJBSEcsQUFHTSxBQUNUOzZCQUFTLE9BQUEsQUFBSyxNQUpYLEFBSWlCOztrQ0FKakI7b0NBQVAsQUFBTyxBQU1WO0FBTlU7QUFDSCxpQkFERztBQURYLEFBQU8sQUFRVixhQVJVOzs7O2lDQVVIO2dCQUFBLEFBQ0csU0FESCxBQUNvQyx1QkFEcEMsQUFDRztnQkFESCxBQUNXLE1BRFgsQUFDb0MsdUJBRHBDLEFBQ1c7Z0JBRFgsQUFDZ0IsYUFEaEIsQUFDb0MsdUJBRHBDLEFBQ2dCO2dCQURoQixBQUM0QixPQUQ1QixBQUNvQyx1QkFEcEMsQUFDNEIsQUFFaEM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNHQUFBLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUF4Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFKWixBQUVJLEFBQ0ksQUFDSSxBQUdSLGdGQUFBLEFBQUMseUNBQU8sT0FBUixBQUFlLE9BQU8sT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUE7QUFBQTtlQVBKLEFBT0ksQUFDQSwwRUFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLHVGQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSxtSEFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsdUdBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLDZHQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSwyRUFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFQSixBQU9JLEFBQ0EseUlBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUkosQUFRSSxBQUNBLDZIQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVRKLEFBU0ksQUFDQSxrRUFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFWSixBQVVJLEFBQ0Esc0RBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBWEosQUFXSSxBQUNBLDZLQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWRaLEFBQ0ksQUFDSSxBQVlJLEFBR1Isc0pBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBMUJaLEFBQ0ksQUFRSSxBQWlCSSxBQUNLLEFBQUssQUFLekI7Ozs7O21ILEFBbkU0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEEsQUFDRjtBLDZDQUFhLDBCQUFBLEEsQUFBVzs7dUNBQ0ssV0FBQSxBQUFXLFFBQVgsQUFBbUIsMEIsQUFBbkIsQUFBNkM7O2lDQUExRTtBOzt5REFDd0IsQUFBUSxVQUM1QixTQUFOLEFBQU0sQUFBUyx1QkFBZixBQUFzQyxPQUF0QyxBQUE2QyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUM5RDsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixnQkFBbkIsQUFBbUMsT0FBMUMsQUFBTyxBQUEwQyxBQUNwRDtBLEFBSHlCLEFBQzFCLGlDQUFBLENBRDBCOztpQ0FBeEI7QTtrRUFLQyxFQUFDLFNBQUQsU0FBVSxpQkFBVixpQkFBMkIsc0JBQTNCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWaUIsQSxBQXVFaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc3BheW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==