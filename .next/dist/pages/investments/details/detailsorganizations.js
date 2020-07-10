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
            buttondisable: false
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
        })), _this.findOrganization = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(address) {
                var investment, organizationsaddressesbypaymentmappingTemp;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                investment = (0, _investment2.default)(_this.props.address);
                                _context2.next = 3;
                                return investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();

                            case 3:
                                organizationsaddressesbypaymentmappingTemp = _context2.sent;
                                return _context2.abrupt('return', organizationsaddressesbypaymentmappingTemp);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.numOrganizations === this.props.nowOrganizationsAddedDeclaireMaster) {
                return this.buttondisable = true;
            } else {
                return this.buttondisable = false;
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
                        lineNumber: 68
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
                        lineNumber: 81
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
                    lineNumber: 96
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, '\u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, disabled: this.buttondisable, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD')), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03B9 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, this.renderRowsByMaster())), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03AD\u03C7\u03BF\u03BD\u03C4\u03B5\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
                var address, investment, investmentsummary, organizationsAddressesCountByMaster, organizationsAddressesByMaster, organizationsAddressesCount, organizationsAddresses;
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
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsAddressesCountByMaster = _context3.sent;
                                _context3.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCountByMaster)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsAddressesByMaster = _context3.sent;
                                _context3.next = 13;
                                return investment.methods.getOrganizationsAddresses().call();

                            case 13:
                                organizationsAddressesCount = _context3.sent;
                                _context3.next = 16;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 16:
                                organizationsAddresses = _context3.sent;
                                return _context3.abrupt('return', { address: address,
                                    organizationsAddressesByMaster: organizationsAddressesByMaster,
                                    organizationsAddressesCountByMaster: organizationsAddressesCountByMaster,
                                    organizationsAddressesCount: organizationsAddressesCount,
                                    organizationsAddresses: organizationsAddresses,
                                    numOrganizations: investmentsummary[1],
                                    nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                                    contributionorganization: investmentsummary[4]
                                });

                            case 18:
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

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiVGFibGUiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNPcmdhbml6YXRpb25Sb3ciLCJEZXRhaWxzT3JnYW5pemF0aW9uUm93QnlNYXN0ZXIiLCJEZXRhaWxzT3JnYW5pemF0aW9ucyIsInN0YXRlIiwiYnV0dG9uZGlzYWJsZSIsIm9uU3VibWl0IiwicmVwbGFjZVJvdXRlIiwicHJvcHMiLCJhZGRyZXNzIiwiZmluZE9yZ2FuaXphdGlvbiIsImludmVzdG1lbnQiLCJtZXRob2RzIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5UGF5bWVudE1hcHBpbmciLCJjYWxsIiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwib3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5TWFzdGVyIiwibWFwIiwiZGV0YWlscyIsImluZGV4IiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwib3JnYW5pemF0aW9uc0FkZHJlc3NlcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93c0J5TWFzdGVyIiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJpbnZlc3RtZW50c3VtbWFyeSIsImdldE9yZ2FuaXphdGlvbnNBZGRyZXNzZXNCeU1hc3RlciIsIm9yZ2FuaXphdGlvbnNBZGRyZXNzZXNDb3VudEJ5TWFzdGVyIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Iiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2RlY2xhaXJlbWFzdGVyIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3NlcyIsIm9yZ2FuaXphdGlvbnNBZGRyZXNzZXNDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVEsQUFBTTs7QUFDdEIsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBNEI7Ozs7QUFDbkMsQUFBTyxBQUFvQzs7Ozs7Ozs7O0ksQUFFckM7Ozs7Ozs7Ozs7Ozs7Ozs0T0FDRixBOzJCQUFRLEFBQ1ksQTtBQURaLEFBQ0osaUIsQUEyQ0osb0ZBQVksbUJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ1I7MkNBQUEsQUFBTywrQkFBNkIsTUFBQSxBQUFLLE1BQXpDLEFBQStDLFVBRHZDOzs2QkFBQTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBS1o7aUdBQW1CLGtCQUFBLEFBQU8sU0FBUDtnQ0FBQTtnRkFBQTs4QkFBQTsyREFBQTtpQ0FDVDtBQURTLDZDQUNJLDBCQUFXLE1BQUEsQUFBSyxNQURwQixBQUNJLEFBQXNCO2lEQUQxQjt1Q0FFMEMsV0FBQSxBQUFXLFFBQVgsQUFBbUIsMENBQW5CLEFBQTZELFNBRnZHLEFBRTBDLEFBQXNFOztpQ0FBekg7QUFGUyx1RkFBQTtrRUFBQSxBQUlSOztpQ0FKUTtpQ0FBQTtpREFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzZDQWRFLEFBQ2pCO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcscUJBQXFCLEtBQUEsQUFBSyxNQUF4QyxBQUE4QyxxQ0FBb0MsQUFDOUU7dUJBQU8sS0FBQSxBQUFLLGdCQUFaLEFBQTRCLEFBQy9CO0FBRkQsbUJBRUssQUFDRDt1QkFBTyxLQUFBLEFBQUssZ0JBQVosQUFBNEIsQUFDL0I7QUFFSjs7Ozs2Q0Fjb0I7eUJBQ2pCOzt3QkFBTyxBQUFLLE1BQUwsQUFBVywrQkFBWCxBQUEwQyxJQUFJLFVB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QUFtQix1QkFBbkIsQSxBQUEwQzs7aUNBQXBFO0E7O3VDQUM0QyxXQUFBLEFBQVcsUUFBWCxBQUFtQixvQ0FBbkIsQUFBdUQsQTs7aUNBQW5HO0E7O3lEQUN1QyxBQUFRLFVBQzdDLFNBQU4sQUFBTSxBQUFTLHNDQUFmLEFBQXFELE9BQXJELEFBQTRELElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFRLEFBQzlFOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHFDQUFuQixBQUF3RCxPQUEvRCxBQUFPLEFBQStELEFBQ3pFO0FBSDBDLEFBQzNDLEEsaUNBQUEsQ0FEMkM7O2lDQUF2QztBOzt1Q0FNb0MsV0FBQSxBQUFXLFFBQVgsQUFBbUIsNEIsQUFBbkIsQUFBK0M7O2lDQUFuRjtBOzt5REFDK0IsQUFBUSxVQUNuQyxTQUFOLEFBQU0sQUFBUyw4QkFBZixBQUE2QyxPQUE3QyxBQUFvRCxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUSxBQUN0RTsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixxQ0FBbkIsQUFBd0QsT0FBL0QsQUFBTyxBQUErRCxBQUN6RTtBQUhnQyxBLEFBQ2pDLGlDQUFBLENBRGlDOztpQ0FBL0I7QTtvRUFRRSxTQUFELEFBQ0g7b0VBREcsQUFDNkIsQUFDaEM7eUVBRkcsQUFFa0MsQUFDckM7aUVBSEcsQUFHMkIsQUFDOUI7NERBSkcsQUFJc0IsQUFDekI7c0RBQW9CLGtCQUxqQixBQUtpQixBQUFrQixBQUN0Qzt5RUFBc0Msa0JBTm5DLEFBTW1DLEFBQWtCLEFBQ3hEOzhEQUEwQixrQkFQdkIsQUFPdUIsQUFBa0IsQTtBQVB6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCb0IsQSxBQTBIbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==