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

var _detailsorganizationrow = require('./detailsorganizationrow');

var _detailsorganizationrow2 = _interopRequireDefault(_detailsorganizationrow);

var _detailsorganizationrowbymaster = require('./detailsorganizationrowbymaster');

var _detailsorganizationrowbymaster2 = _interopRequireDefault(_detailsorganizationrowbymaster);

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js?entry';


var DetailsOrganizations = function (_Component) {
    (0, _inherits3.default)(DetailsOrganizations, _Component);

    function DetailsOrganizations() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DetailsOrganizations);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            buttondisable: false,
            orgbuttondisable: false
        }, _this.onSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _routes.Router.replaceRoute('/investments/' + _this.props.address + '/requests/neworganization');

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onInsert = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var investment, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ loading: true, errMessage: '' });
                            _context2.prev = 1;
                            investment = (0, _investment2.default)(_this.props.address);
                            _context2.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context2.sent;
                            _context2.next = 8;
                            return investment.methods.E_OrganizationsPayment().send({
                                from: accounts[0],
                                value: _web2.default.utils.toWei(_this.props.contributionorganization, 'wei')
                            });

                        case 8:

                            _routes.Router.replaceRoute('/investments/' + _this.props.address + '/details/detailsorganizations');

                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2['catch'](1);

                            _this.setState({ errMessage: _context2.t0.message });

                        case 14:

                            _this.setState({ loading: false, value: '' });

                        case 15:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[1, 11]]);
        })), _this.findOrganization = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(address) {
                var investment, organizationsaddressesbypaymentmappingTemp;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                investment = (0, _investment2.default)(_this.props.address);
                                _context3.next = 3;
                                return investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();

                            case 3:
                                organizationsaddressesbypaymentmappingTemp = _context3.sent;
                                return _context3.abrupt('return', organizationsaddressesbypaymentmappingTemp);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            }));

            return function (_x) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.numOrganizations === this.props.nowOrganizationsAddedDeclaireMaster && this.props.numOrganizations === this.props.nowOrganizationsAdded) {
                return this.buttondisable = true, this.orgbuttondisable = true;
            } else if (this.props.numOrganizations === this.props.nowOrganizationsAddedDeclaireMaster && !(this.props.numOrganizations === this.props.nowOrganizationsAdded)) {
                return this.buttondisable = true, this.orgbuttondisable = false;
            } else {
                this.buttondisable = false, this.orgbuttondisable = false;
            }
        }
    }, {
        key: 'renderRowsByMaster',
        value: function renderRowsByMaster() {
            var _this3 = this;

            return this.props.organizationsAddressesByMaster.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrowbymaster2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    contributionorganization: _this3.props.contributionorganization,
                    organizationsaddressesbypaymentmapping: _this3.findOrganization(details),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                });
            });
        }
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var _this4 = this;

            return this.props.organizationsAddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this4.props.address,
                    contributionorganization: _this4.props.contributionorganization,
                    organizationsaddressesbypaymentmapping: _this4.findOrganization(details),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105
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
                    lineNumber: 120
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, '\u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onInsert, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', floated: 'left', basic: true, disabled: this.orgbuttondisable, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'))), ' ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03AD\u03C7\u03BF\u03BD\u03C4\u03B5\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, this.renderRows())), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03B9 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u0395\u03C0\u03CC\u03C0\u03C4\u03B7'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, this.renderRowsByMaster())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, disabled: this.buttondisable, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
                var address, investment, investmentsummary, organizationsAddressesCountByMaster, organizationsAddressesByMaster, organizationsAddressesCount, organizationsAddresses;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context4.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummary = _context4.sent;
                                _context4.next = 7;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsAddressesCountByMaster = _context4.sent;
                                _context4.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCountByMaster)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsAddressesByMaster = _context4.sent;
                                _context4.next = 13;
                                return investment.methods.getOrganizationsAddresses().call();

                            case 13:
                                organizationsAddressesCount = _context4.sent;
                                _context4.next = 16;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 16:
                                organizationsAddresses = _context4.sent;
                                return _context4.abrupt('return', { address: address,
                                    organizationsAddressesByMaster: organizationsAddressesByMaster,
                                    organizationsAddressesCountByMaster: organizationsAddressesCountByMaster,
                                    organizationsAddressesCount: organizationsAddressesCount,
                                    organizationsAddresses: organizationsAddresses,
                                    numOrganizations: investmentsummary[1],
                                    nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                                    nowOrganizationsAdded: investmentsummary[3],
                                    contributionorganization: investmentsummary[4]
                                });

                            case 18:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getInitialProps(_x2) {
                return _ref5.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiVGFibGUiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNPcmdhbml6YXRpb25Sb3ciLCJEZXRhaWxzT3JnYW5pemF0aW9uUm93QnlNYXN0ZXIiLCJ3ZWIzIiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJzdGF0ZSIsImJ1dHRvbmRpc2FibGUiLCJvcmdidXR0b25kaXNhYmxlIiwib25TdWJtaXQiLCJyZXBsYWNlUm91dGUiLCJwcm9wcyIsImFkZHJlc3MiLCJvbkluc2VydCIsInNldFN0YXRlIiwibG9hZGluZyIsImVyck1lc3NhZ2UiLCJpbnZlc3RtZW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJFX09yZ2FuaXphdGlvbnNQYXltZW50Iiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJjb250cmlidXRpb25vcmdhbml6YXRpb24iLCJtZXNzYWdlIiwiZmluZE9yZ2FuaXphdGlvbiIsImdldE9yZ2FuaXphdGlvbnNBZGRyZXNzZXNCeVBheW1lbnRNYXBwaW5nIiwiY2FsbCIsIm9yZ2FuaXphdGlvbnNhZGRyZXNzZXNieXBheW1lbnRtYXBwaW5nVGVtcCIsIm51bU9yZ2FuaXphdGlvbnMiLCJub3dPcmdhbml6YXRpb25zQWRkZWREZWNsYWlyZU1hc3RlciIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZCIsIm9yZ2FuaXphdGlvbnNBZGRyZXNzZXNCeU1hc3RlciIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsIm9yZ2FuaXphdGlvbnNBZGRyZXNzZXMiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJyZW5kZXJSb3dzQnlNYXN0ZXIiLCJxdWVyeSIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiaW52ZXN0bWVudHN1bW1hcnkiLCJnZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlNYXN0ZXIiLCJvcmdhbml6YXRpb25zQWRkcmVzc2VzQ291bnRCeU1hc3RlciIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsIm9yZ2FuaXphdGlvbnNhZGRyZXNzZXNkZWNsYWlyZW1hc3RlciIsImdldE9yZ2FuaXphdGlvbnNBZGRyZXNzZXMiLCJvcmdhbml6YXRpb25zQWRkcmVzc2VzQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFRLEFBQU07O0FBQ3RCLEFBQVEsQUFBTSxBQUFhOztBQUMzQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQTRCOzs7O0FBQ25DLEFBQU8sQUFBb0M7Ozs7QUFDM0MsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7NE8sQUFDRjsyQkFBUSxBQUNZLEFBQ2hCOzhCQUZJLEFBRWMsQTtBQUZkLEFBQ0osaUJBOENKLEEsb0ZBQVksbUJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ1I7MkNBQUEsQUFBTywrQkFBNkIsTUFBQSxBQUFLLE1BQXpDLEFBQStDLFVBRHZDOzs2QkFBQTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBS1osb0ZBQVcsb0JBQUE7NEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ1A7a0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sWUFEdkIsQUFDUCxBQUFjLEFBQTRCOzZDQUVoQztBQUhILHlDQUdnQiwwQkFBVyxNQUFBLEFBQUssTUFIaEMsQUFHZ0IsQUFBc0I7NkNBSHRDO21DQUlvQixjQUFBLEFBQUssSUFKekIsQUFJb0IsQUFBUzs7NkJBQTFCO0FBSkgsaURBQUE7NkNBQUE7OENBS0csQUFB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QyxTQUFOLEFBQU0sQUFBUyw4QkFBZixBQUE2QyxPQUE3QyxBQUFvRCxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUSxBQUN0RTsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixxQ0FBbkIsQUFBd0QsT0FBL0QsQUFBTyxBQUErRCxBQUN6RTtBQUhnQyxBQUNqQyxBLGlDQUFBLENBRGlDOztpQ0FBL0I7QTtvRUFRRSxTQUFELEFBQ0g7b0VBREcsQUFDNkIsQUFDaEM7eUVBRkcsQUFFa0MsQUFDckM7aUVBSEcsQUFHMkIsQUFDOUI7NERBSkcsQUFJc0IsQUFDekI7c0RBQW9CLGtCQUxqQixBQUtpQixBQUFrQixBQUN0Qzt5RUFBc0Msa0JBTm5DLEFBTW1DLEFBQWtCLEFBQ3hEOzJEQUF3QixrQkFQckIsQUFPcUIsQUFBa0IsQUFDMUM7OERBQTBCLGtCQVJ2QixBQVF1QixBQUFrQixBO0FBUnpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUJvQixBLEFBb0puQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzb3JnYW5pemF0aW9ucy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9