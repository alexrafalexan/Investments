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
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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

        // findOrganization = async (address) => {
        //     const investment = Investment(this.props.address);
        //     const organizationsaddressesbypaymentmappingTemp = await investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();
        //  // console.log(organizationsaddressesbypaymentmappingTemp);
        //     return organizationsaddressesbypaymentmappingTemp;
        // }

        value: function renderRowsByMaster() {
            var _this3 = this;

            return this.props.organizationsAddressesByMaster.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrowbymaster2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    contributionorganization: _this3.props.contributionorganization
                    // organizationsaddressesbypaymentmapping = {this.findOrganization(details)}
                    , __source: {
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

            return this.props.organizationsAddressesByMaster.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this4.props.address,
                    contributionorganization: _this4.props.contributionorganization
                    // organizationsaddressesbypaymentmapping = {this.findOrganization(details)}
                    , __source: {
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
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, investmentsummary, organizationsAddressesCountByMaster, organizationsAddressesByMaster, organizationsAddressesCount, organizationsAddresses;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context2.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummary = _context2.sent;
                                _context2.next = 7;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsAddressesCountByMaster = _context2.sent;
                                _context2.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCountByMaster)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsAddressesByMaster = _context2.sent;
                                _context2.next = 13;
                                return investment.methods.getOrganizationsAddresses().call();

                            case 13:
                                organizationsAddressesCount = _context2.sent;
                                _context2.next = 16;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 16:
                                organizationsAddresses = _context2.sent;
                                return _context2.abrupt('return', { address: address,
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
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiVGFibGUiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNPcmdhbml6YXRpb25Sb3ciLCJEZXRhaWxzT3JnYW5pemF0aW9uUm93QnlNYXN0ZXIiLCJEZXRhaWxzT3JnYW5pemF0aW9ucyIsInN0YXRlIiwiYnV0dG9uZGlzYWJsZSIsIm9uU3VibWl0IiwicmVwbGFjZVJvdXRlIiwicHJvcHMiLCJhZGRyZXNzIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwib3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5TWFzdGVyIiwibWFwIiwiZGV0YWlscyIsImluZGV4IiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzQnlNYXN0ZXIiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJpbnZlc3RtZW50IiwibWV0aG9kcyIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiY2FsbCIsImludmVzdG1lbnRzdW1tYXJ5IiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5TWFzdGVyIiwib3JnYW5pemF0aW9uc0FkZHJlc3Nlc0NvdW50QnlNYXN0ZXIiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJvcmdhbml6YXRpb25zYWRkcmVzc2VzZGVjbGFpcmVtYXN0ZXIiLCJnZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzIiwib3JnYW5pemF0aW9uc0FkZHJlc3Nlc0NvdW50Iiwib3JnYW5pemF0aW9uc0FkZHJlc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBZFIsQUFLSSxBQVNJLEFBQ0ssQUFBSyxBQUdkLHdDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsOEtBQUEsQUFBQzs7OEJBQUQ7Z0NBTFosQUFDSSxBQUNJLEFBR0ksQUFHUjtBQUhRO0FBQUEsa0NBR1AsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBM0JaLEFBQ0ksQUFrQkksQUFRSSxBQUNLLEFBQUssQUFLekI7Ozs7O21IQWxINEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE1BQ3BCLEEsQUFERTtBLDZDQUNXLDBCLEFBQUEsQUFBVzs7dUNBQ0UsV0FBQSxBQUFXLFFBQVgsQUFBbUIsdUIsQUFBbkIsQUFBMEM7O2lDQUFwRTtBOzt1Q0FDNEMsV0FBQSxBQUFXLFFBQVgsQUFBbUIsb0NBQW9DLEEsQUFBdkQ7O2lDQUE1QztBOzt5REFDdUMsQUFBUSxVQUM3QyxTQUFOLEFBQU0sQUFBUyxzQ0FBZixBQUFxRCxPQUFyRCxBQUE0RCxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUSxBQUM5RTsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixxQ0FBbkIsQUFBd0QsT0FBL0QsQUFBTyxBQUErRCxBQUN6RTtBQUgwQyxBQUMzQyxBLGlDQUFBLENBRDJDOztpQ0FBdkM7QTs7dUNBTW9DLFdBQUEsQUFBVyxRQUFYLEFBQW1CLDRCLEFBQW5CLEFBQStDOztpQ0FBbkY7QTs7eURBQytCLEFBQVEsVUFDbkMsU0FBTixBQUFNLEFBQVMsOEJBQWYsQUFBNkMsT0FBN0MsQUFBb0QsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVEsQUFDdEU7MkNBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIscUNBQW5CLEFBQXdELE9BQS9ELEFBQU8sQUFBK0QsQUFDekU7QUFIZ0MsQUFDakMsQSxpQ0FBQSxDQURpQzs7aUNBQS9CO0E7b0VBUUUsU0FBRCxBQUNIO29FQURHLEFBQzZCLEFBQ2hDO3lFQUZHLEFBRWtDLEFBQ3JDO2lFQUhHLEFBRzJCLEFBQzlCOzREQUpHLEFBSXNCLEFBQ3pCO3NEQUFvQixrQkFMakIsQUFLaUIsQUFBa0IsQUFDdEM7eUVBQXNDLGtCQU5uQyxBQU1tQyxBQUFrQixBQUN4RDs4REFBMEIsa0JBUHZCLEFBT3VCLEFBQWtCLEE7QUFQekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6Qm9CLEEsQUEwSG5DOztrQkFBQSxBQUFlIiwiZmlsZSI6ImRldGFpbHNvcmdhbml6YXRpb25zLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=