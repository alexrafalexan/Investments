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
                        lineNumber: 58
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
                    lineNumber: 73
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, '\u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, disabled: this.buttondisable, onClick: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD')), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
                var address, investment, investmentsummary, organizationsAddressesCount, organizationsAddresses;
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
                                organizationsAddressesCount = _context3.sent;
                                _context3.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsAddresses = _context3.sent;
                                return _context3.abrupt('return', { address: address,
                                    organizationsAddresses: organizationsAddresses,
                                    organizationsAddressesCount: organizationsAddressesCount,
                                    numOrganizations: investmentsummary[1],
                                    nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                                    contributionorganization: investmentsummary[4]
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

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiVGFibGUiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNPcmdhbml6YXRpb25Sb3ciLCJEZXRhaWxzT3JnYW5pemF0aW9ucyIsInN0YXRlIiwiYnV0dG9uZGlzYWJsZSIsIm9uU3VibWl0IiwicmVwbGFjZVJvdXRlIiwicHJvcHMiLCJhZGRyZXNzIiwiZmluZE9yZ2FuaXphdGlvbiIsImludmVzdG1lbnQiLCJtZXRob2RzIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5UGF5bWVudE1hcHBpbmciLCJjYWxsIiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwib3JnYW5pemF0aW9uc0FkZHJlc3NlcyIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsImNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbiIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJpbnZlc3RtZW50c3VtbWFyeSIsImdldE9yZ2FuaXphdGlvbnNBZGRyZXNzZXNCeU1hc3RlciIsIm9yZ2FuaXphdGlvbnNBZGRyZXNzZXNDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsIm9yZ2FuaXphdGlvbnNhZGRyZXNzZXNkZWNsYWlyZW1hc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVEsQUFBTTs7QUFDdEIs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SztBQURMO0FBQUEsb0JBaEJaLEFBQ0ksQUFLSSxBQVVJLEFBQ0ssQUFBSyxBQUt6Qjs7Ozs7bUhBakY0QixBOzs7OztpQ0FDakI7QSwwQ0FBWSxNQUFNLEEsTUFBbEIsQSxBQUNGO0EsNkNBQWEsMEJBQUEsQSxBQUFXOzt1Q0FDRSxXQUFBLEFBQVcsUUFBWCxBQUFtQix1QkFBdUIsQSxBQUExQzs7aUNBQTFCO0E7O3VDQUNvQyxXQUFBLEFBQVcsUUFBWCxBQUFtQixvQ0FBbkIsQSxBQUF1RDs7aUNBQTNGO0E7O3lEQUMrQixBQUFRLFVBQ3JDLFNBQU4sQUFBTSxBQUFTLDhCQUFmLEFBQTZDLE9BQTdDLEFBQW9ELElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQ3JFOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHFDQUFuQixBQUF3RCxPQUEvRCxBQUFPLEFBQStELEFBQ3pFO0FBSGtDLEFBQ25DLEEsaUNBQUEsQ0FEbUM7O2lDQUEvQjtBO29FQVFFLFNBQUQsQUFDSDs0REFERyxBQUVIO2lFQUZHLEFBR0g7c0RBQW9CLGtCQUhqQixBQUdpQixBQUFrQixBQUN0Qzt5RUFBc0Msa0JBSm5DLEFBSW1DLEFBQWtCLEFBQ3hEOzhEQUEwQixrQkFMdkIsQUFLdUIsQUFBa0IsQTtBQUx6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxCb0IsQSxBQXlGbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==