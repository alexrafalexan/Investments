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

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js';


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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).call.apply(_ref, [this].concat(args))), _this), _this.findOrganization = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
                var investment, organizationsaddressesbypaymentmappingTemp;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 3;
                                return investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();

                            case 3:
                                organizationsaddressesbypaymentmappingTemp = _context.sent;

                                console.log(organizationsaddressesbypaymentmappingTemp);
                                return _context.abrupt('return', { organizationsaddressesbypaymentmappingTemp: organizationsaddressesbypaymentmappingTemp });

                            case 6:
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

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this3 = this;

            return this.props.organizationsΑddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    contributionorganization: _this3.props.contributionorganization,
                    organizationsaddressesbypaymentmapping: _promise2.default.resolve(_this3.findOrganization(details)),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
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
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, investmentsummaryTemp, organizationsΑddressesCount, organizationsΑddresses;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context2.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummaryTemp = _context2.sent;
                                _context2.next = 7;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsΑddressesCount = _context2.sent;
                                _context2.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsΑddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsΑddresses = _context2.sent;
                                return _context2.abrupt('return', { address: address,
                                    organizationsΑddresses: organizationsΑddresses,
                                    organizationsΑddressesCount: organizationsΑddressesCount,
                                    contributionorganization: investmentsummaryTemp[4]
                                });

                            case 12:
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

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc09yZ2FuaXphdGlvblJvdyIsIkRldGFpbHNPcmdhbml6YXRpb25zIiwiZmluZE9yZ2FuaXphdGlvbiIsImFkZHJlc3MiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJtZXRob2RzIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5UGF5bWVudE1hcHBpbmciLCJjYWxsIiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wIiwiY29uc29sZSIsImxvZyIsIm9yZ2FuaXphdGlvbnPOkWRkcmVzc2VzIiwibWFwIiwiZGV0YWlscyIsImluZGV4IiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwicmVzb2x2ZSIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJpbnZlc3RtZW50c3VtbWFyeVRlbXAiLCJnZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlNYXN0ZXIiLCJvcmdhbml6YXRpb25zzpFkZHJlc3Nlc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Iiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2RlY2xhaXJlbWFzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUTs7QUFDaEIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQTRCOzs7Ozs7Ozs7SSxBQUU3Qjs7Ozs7Ozs7Ozs7Ozs7OzRPLEFBbUJGO2lHQUFtQixpQkFBQSxBQUFPLFNBQVA7Z0NBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1Q7QUFEUyw2Q0FDSSwwQkFBVyxNQUFBLEFBQUssTUFEcEIsQUFDSSxBQUFzQjtnREFEMUI7dUNBRTBDLFdBQUEsQUFBVyxRQUFYLEFBQW1CLDBDQUFuQixBQUE2RCxTQUZ2RyxBQUUwQyxBQUFzRTs7aUNBQXpIO0FBRlMsc0ZBR2Y7O3dDQUFBLEFBQVEsSUFITyxBQUdmLEFBQVk7aUVBQ0wsRUFBQyw0Q0FKTyxBQUlSOztpQ0FKUTtpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBOzs7Ozs7Ozs7O3FDQU9OO3lCQUNUOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyx1QkFBWCxBQUFrQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM3RDt1Q0FBTyxBQUFDO3lCQUFELEFBQ0YsQUFDTDt3QkFGTyxBQUVELEFBQ047NkJBSE8sQUFHRSxBQUNUOzZCQUFTLE9BQUEsQUFBSyxNQUpQLEFBSWEsQUFDcEI7OENBQTRCLE9BQUEsQUFBSyxNQUwxQixBQUtnQyxBQUN2Qzs0REFBMEMsa0JBQUEsQUFBUSxRQUFRLE9BQUEsQUFBSyxpQkFOeEQsQUFNbUMsQUFBZ0IsQUFBc0I7O2tDQU56RTtvQ0FBUCxBQUFPLEFBUVY7QUFSVTtBQUNQLGlCQURPO0FBRFgsQUFBTyxBQVVWLGFBVlU7Ozs7aUNBWUg7Z0JBQUEsQUFDRyxTQURILEFBQ29DLHVCQURwQyxBQUNHO2dCQURILEFBQ1csTUFEWCxBQUNvQyx1QkFEcEMsQUFDVztnQkFEWCxBQUNnQixhQURoQixBQUNvQyx1QkFEcEMsQUFDZ0I7Z0JBRGhCLEFBQzRCLE9BRDVCLEFBQ29DLHVCQURwQyxBQUM0QixBQUVoQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyx5QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBR1Isa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxxTEFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0Esd0lBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTlosQUFDSSxBQUNJLEFBSUksQUFHUixxTkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFqQlosQUFDSSxBQU9JLEFBU0ksQUFDSyxBQUFLLEFBS3pCOzs7OzttSEFoRTRCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNQUFsQixBLEFBQ0Y7QSw2Q0FBYSwwQkFBQSxBLEFBQVc7O3VDQUNNLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHVCQUFuQixBQUEwQyxBOztpQ0FBeEU7QTs7dUNBQ29DLFdBQUEsQUFBVyxRQUFYLEFBQW1CLG9DQUFuQixBQUF1RCxBOztpQ0FBM0Y7QTs7eURBQytCLEFBQVEsVUFDckMsU0FBTixBQUFNLEFBQVMsOEJBQWYsQUFBNkMsT0FBN0MsQUFBb0QsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVEsQUFDckU7MkNBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIscUNBQW5CLEFBQXdELE9BQS9ELEFBQU8sQUFBK0QsQUFDekU7QUFIa0MsQUFDbkMsQSxpQ0FBQSxDQURtQzs7aUNBQS9CO0E7b0VBTUUsU0FBRCxBQUNIOzREQURHLEFBRUg7aUVBRkcsQUFHSDs4REFBMEIsc0JBSHZCLEFBR3VCLEFBQXNCLEE7QUFIN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFab0IsQSxBQW9FbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==