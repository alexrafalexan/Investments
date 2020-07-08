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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
            if (this.nowOrganizationsAddedDeclaireMaster === this.numOrganizations) {
                return this.buttondisable = true;
            } else {
                return this.buttondisable = false;
            }
        }
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var _this3 = this;

            return this.props.organizationsAddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    contributionorganization: _this3.props.contributionorganization,
                    organizationsaddressesbypaymentmapping: _this3.findOrganization(details),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
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
                    lineNumber: 67
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, '\u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, disabled: this.buttondisable, onClick: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD')), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
                var address, buttondisable, investment, investmentsummary, organizationsAddressesCount, organizationsAddresses;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                address = props.query.address;
                                buttondisable = void 0;
                                investment = (0, _investment2.default)(address);
                                _context3.next = 5;
                                return investment.methods.getInvestmentSummary().call();

                            case 5:
                                investmentsummary = _context3.sent;
                                _context3.next = 8;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 8:
                                organizationsAddressesCount = _context3.sent;
                                _context3.next = 11;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 11:
                                organizationsAddresses = _context3.sent;
                                return _context3.abrupt('return', { address: address,
                                    organizationsAddresses: organizationsAddresses,
                                    organizationsAddressesCount: organizationsAddressesCount,
                                    numOrganizations: investmentsummary[1],
                                    nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                                    contributionorganization: investmentsummary[4]
                                });

                            case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiVGFibGUiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNPcmdhbml6YXRpb25Sb3ciLCJEZXRhaWxzT3JnYW5pemF0aW9ucyIsIm9uU3VibWl0IiwicmVwbGFjZVJvdXRlIiwicHJvcHMiLCJhZGRyZXNzIiwiZmluZE9yZ2FuaXphdGlvbiIsImludmVzdG1lbnQiLCJtZXRob2RzIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5UGF5bWVudE1hcHBpbmciLCJjYWxsIiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wIiwibm93T3JnYW5pemF0aW9uc0FkZGVkRGVjbGFpcmVNYXN0ZXIiLCJudW1Pcmdhbml6YXRpb25zIiwiYnV0dG9uZGlzYWJsZSIsIm9yZ2FuaXphdGlvbnNBZGRyZXNzZXMiLCJtYXAiLCJkZXRhaWxzIiwiaW5kZXgiLCJjb250cmlidXRpb25vcmdhbml6YXRpb24iLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiaW52ZXN0bWVudHN1bW1hcnkiLCJnZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlNYXN0ZXIiLCJvcmdhbml6YXRpb25zQWRkcmVzc2VzQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJvcmdhbml6YXRpb25zYWRkcmVzc2VzZGVjbGFpcmVtYXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFRLEFBQU07O0FBQ3RCLEFBQVEsQUFB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L0U0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEFBQ0osQTtBLHFEQUNFO0EsNkNBQWEsMEIsQUFBQSxBQUFXOzt1Q0FDRSxXQUFBLEFBQVcsUUFBWCxBQUFtQix1QkFBbkIsQUFBMEMsQTs7aUNBQXBFO0E7O3VDQUNvQyxXQUFBLEFBQVcsUUFBWCxBQUFtQixvQ0FBb0MsQSxBQUF2RDs7aUNBQXBDO0E7O3lEQUMrQixBQUFRLFVBQ3JDLFNBQU4sQUFBTSxBQUFTLDhCQUFmLEFBQTZDLE9BQTdDLEFBQW9ELElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQ3JFOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHFDQUFuQixBQUF3RCxPQUEvRCxBQUFPLEFBQStELEFBQ3pFO0FBSGtDLEFBQ25DLEEsaUNBQUEsQ0FEbUM7O2lDQUEvQjtBO29FQU1FLFNBQUQsQUFDSDs0REFERyxBQUVIO2lFQUZHLEFBR0g7c0RBQW9CLGtCQUhqQixBQUdpQixBQUFrQixBQUN0Qzt5RUFBc0Msa0JBSm5DLEFBSW1DLEFBQWtCLEFBQ3hEOzhEQUEwQixrQkFMdkIsQUFLdUIsQUFBa0IsQTtBQUx6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJvQixBLEFBbUZuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzb3JnYW5pemF0aW9ucy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9