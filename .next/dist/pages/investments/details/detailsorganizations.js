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

var _detailsorganizationrow = require('./detailsorganizationrow');

var _detailsorganizationrow2 = _interopRequireDefault(_detailsorganizationrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js';


var DetailsOrganizations = function (_Component) {
    (0, _inherits3.default)(DetailsOrganizations, _Component);

    function DetailsOrganizations() {
        (0, _classCallCheck3.default)(this, DetailsOrganizations);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.organizationsΑddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this2.props.address,
                    contributionorganization: _this2.props.contributionorganization,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
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
                    lineNumber: 44
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'))), _react2.default.createElement(Body, {
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
                var address, investment, investmentsummaryTemp, organizationsΑddressesCount, organizationsΑddresses;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummaryTemp = _context.sent;
                                _context.next = 7;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsΑddressesCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsΑddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsΑddresses = _context.sent;
                                return _context.abrupt('return', { address: address,
                                    organizationsΑddresses: organizationsΑddresses,
                                    organizationsΑddressesCount: organizationsΑddressesCount,
                                    contributionorganization: investmentsummaryTemp[4]
                                });

                            case 12:
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

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc09yZ2FuaXphdGlvblJvdyIsIkRldGFpbHNPcmdhbml6YXRpb25zIiwicHJvcHMiLCJvcmdhbml6YXRpb25zzpFkZHJlc3NlcyIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsImFkZHJlc3MiLCJjb250cmlidXRpb25vcmdhbml6YXRpb24iLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImludmVzdG1lbnQiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnlUZW1wIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5TWFzdGVyIiwib3JnYW5pemF0aW9uc86RZGRyZXNzZXNDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsIm9yZ2FuaXphdGlvbnNhZGRyZXNzZXNkZWNsYWlyZW1hc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVE7O0FBQ2hCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUE0Qjs7Ozs7Ozs7O0ksQUFFN0I7Ozs7Ozs7Ozs7O3FDQW9CVzt5QkFDVDs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsdUJBQVgsQUFBa0MsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDN0Q7dUNBQU8sQUFBQzt5QkFBRCxBQUNGLEFBQ0w7d0JBRk8sQUFFRCxBQUNOOzZCQUhPLEFBR0UsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKUCxBQUlhLEFBQ3BCOzhDQUE0QixPQUFBLEFBQUssTUFMMUIsQUFLZ0M7O2tDQUxoQztvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNQLGlCQURPO0FBRFgsQUFBTyxBQVNWLGFBVFU7Ozs7aUNBV0g7Z0JBQUEsQUFDRyxTQURILEFBQ29DLHVCQURwQyxBQUNHO2dCQURILEFBQ1csTUFEWCxBQUNvQyx1QkFEcEMsQUFDVztnQkFEWCxBQUNnQixhQURoQixBQUNvQyx1QkFEcEMsQUFDZ0I7Z0JBRGhCLEFBQzRCLE9BRDVCLEFBQ29DLHVCQURwQyxBQUM0QixBQUVoQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyx5QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBR1Isa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxxTEFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMWixBQUNJLEFBQ0ksQUFHSSxBQUdSLHFOQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQWhCWixBQUNJLEFBT0ksQUFRSSxBQUNLLEFBQUssQUFLekI7Ozs7O2lIQXhENEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE0sQUFBbEIsQUFDRjtBLDZDQUFhLDBCQUFBLEEsQUFBVzs7dUNBQ00sV0FBQSxBQUFXLFFBQVgsQUFBbUIsdUJBQW5CLEFBQTBDLEE7O2lDQUF4RTtBOzt1Q0FDb0MsV0FBQSxBQUFXLFFBQVgsQUFBbUIsb0NBQW9DLEEsQUFBdkQ7O2lDQUFwQztBOzt5REFDK0IsQUFBUSxVQUNyQyxTQUFOLEFBQU0sQUFBUyw4QkFBZixBQUE2QyxPQUE3QyxBQUFvRCxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUNyRTsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixxQ0FBbkIsQUFBd0QsT0FBL0QsQUFBTyxBQUErRCxBQUN6RTtBQUhrQyxBQUNuQyxBLGlDQUFBLENBRG1DOztpQ0FBL0I7QTttRUFPRSxTQUFELEFBQ0g7NERBREcsQUFFSDtpRUFGRyxBQUdIOzhEQUEwQixzQixBQUh2QixBQUd1QixBQUFzQjtBQUg3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJvQixBLEFBNERuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzb3JnYW5pemF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9