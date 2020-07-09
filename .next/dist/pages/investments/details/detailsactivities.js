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

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsactivities.js?entry';


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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsActivities.__proto__ || (0, _getPrototypeOf2.default)(DetailsActivities)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errMessage: '',
            loading: false,
            buttondisable: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var account, investment;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                account = _context.sent;
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 9;
                                return investment.methods.G_checkStatusOfActivities().send({
                                    from: account[0]
                                });

                            case 9:

                                _routes.Router.replaceRoute('/investments/' + _this.props.address + '/details/detailsactivities');

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onClick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _routes.Router.replaceRoute('/investments/' + _this.props.address + '/requests/newactivity');

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DetailsActivities, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.activities === this.props.activitiesTable_length) {
                return this.buttondisable = true;
            } else {
                return this.buttondisable = false;
            }
        }
    }, {
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
                        lineNumber: 70
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
                    lineNumber: 83
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 Activity'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: "red", disabled: this.buttondisable, onClick: this.onClick, basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 Activity')), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, '\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 Activities'), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, '\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03CC \u039A\u03AC\u03BB\u03B7\u03C8\u03B7\u03C2 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, '\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CC \u03A0\u03BF\u03C3\u03CC Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, '\u0394\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF \u03A0\u03BF\u03C3\u03CC Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, '\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, '\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 Activity (\u03A7\u03C1\u03BF\u03BD. \u0394\u03B9\u03AC\u03BA\u03B5\u03B9\u03B1)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, '\u039B\u03AE\u03BE\u03B7 Activity (\u03A7\u03C1\u03BF\u03BD. \u0394\u03B9\u03AC\u03BA\u03B5\u03B9\u03B1)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, '\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, '\u039B\u03AE\u03BE\u03B7 Activity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, '\u0394\u03B9\u03B1\u03BC\u03CC\u03C1\u03C6\u03C9\u03C3\u03B7 \u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03BF\u03CD \u039A\u03AC\u03BB\u03C5\u03C8\u03B7\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, '\u0391\u03BB\u03BB\u03B1\u03B3\u03AE \u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, '\u03A0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B5 \u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, this.renderRows())), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
                var address, investment, investmentsummary, activitiesTableCount, activitiesTable;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context3.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummary = _context3.sent;
                                _context3.next = 7;
                                return investment.methods.getActivitiesTableCount().call();

                            case 7:
                                activitiesTableCount = _context3.sent;
                                _context3.next = 10;
                                return _promise2.default.all(Array(parseInt(activitiesTableCount)).fill().map(function (element, index) {
                                    return investment.methods.activitiesTable(index).call();
                                }));

                            case 10:
                                activitiesTable = _context3.sent;
                                return _context3.abrupt('return', {
                                    address: address,
                                    activitiesTable: activitiesTable,
                                    activitiesTableCount: activitiesTableCount,
                                    activities: investmentsummary[8],
                                    activitiesTable_length: investmentsummary[9]
                                });

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getInitialProps(_x2) {
                return _ref4.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return DetailsActivities;
}(_react.Component);

exports.default = DetailsActivities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXRpZXMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiTWVzc2FnZSIsIlRhYmxlIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIkludmVzdG1lbnQiLCJEZXRhaWxzQWN0aXZpdGllc1JvdyIsIndlYjMiLCJEZXRhaWxzQWN0aXZpdGllcyIsInN0YXRlIiwiZXJyTWVzc2FnZSIsImxvYWRpbmciLCJidXR0b25kaXNhYmxlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsIkdfY2hlY2tTdGF0dXNPZkFjdGl2aXRpZXMiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJhY3Rpdml0aWVzIiwiYWN0aXZpdGllc1RhYmxlX2xlbmd0aCIsImFjdGl2aXRpZXNUYWJsZSIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiLCJnZXRBY3Rpdml0aWVzVGFibGVDb3VudCIsImFjdGl2aXRpZXNUYWJsZUNvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUSxBQUFNLEFBQVM7O0FBQy9CLEFBQVEsQUFBTSxBQUFhOztBQUMzQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFB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cEJSLEFBRUksQUFrQkksQUFDSyxBQUFLLEFBR2QsZ0NBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FoQ1osQUFDSSxBQU9JLEFBd0JJLEFBSWY7QUFKZTs7Ozs7O21IQWxHYSxBOzs7OztpQ0FDbEI7QSwwQ0FBVyxNLEFBQU0sTUFBakIsQSxBQUNEO0EsNkNBQWEsMEJBQVcsQSxBQUFYOzt1Q0FDYSxXQUFBLEFBQVcsUUFBWCxBQUFtQix1QkFBdUIsQSxBQUExQzs7aUNBQTFCO0E7O3VDQUM2QixXQUFBLEFBQVcsUUFBWCxBQUFtQiwwQkFBbkIsQUFBNkMsQTs7aUNBQTFFO0E7O3lEQUN3QixBQUFRLFVBQzVCLFNBQU4sQUFBTSxBQUFTLHVCQUFmLEFBQXNDLE9BQXRDLEFBQTZDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pFOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGdCQUFuQixBQUFtQyxPQUExQyxBQUFPLEFBQTBDLEFBQ3BEO0FBSHlCLEFBQzFCLEEsaUNBQUEsQ0FEMEI7O2lDQUF4QjtBOzs2Q0FLQyxBQUVIO3FEQUZHLEFBR0g7MERBSEcsQUFJSDtnREFBWSxrQkFKVCxBQUlTLEFBQWtCLEFBQzlCOzREQUF3QixrQkFMckIsQUFLcUIsQUFBa0IsQTtBQUx2QyxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEJvQixBLEFBZ0hoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzYWN0aXZpdGllcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9