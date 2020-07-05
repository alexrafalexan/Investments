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

var _detailspaymentrow = require('./detailspaymentrow');

var _detailspaymentrow2 = _interopRequireDefault(_detailspaymentrow);

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailspayment.js?entry';


var DetailsActivities = function (_Component) {
    (0, _inherits3.default)(DetailsActivities, _Component);

    function DetailsActivities() {
        (0, _classCallCheck3.default)(this, DetailsActivities);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsActivities.__proto__ || (0, _getPrototypeOf2.default)(DetailsActivities)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsActivities, [{
        key: 'renderRows',
        value: function renderRows() {
            return this.props.purchaseTable.map(function (details, index) {
                return _react2.default.createElement(_detailspaymentrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
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
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 \u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03CE\u03BD'), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, '\u0394\u03C1\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, '\u03A0\u03BF\u03C3\u03CC \u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2(wei)'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, '\u03A0\u03C9\u03BB\u03B7\u03C4\u03AE\u03C2'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, investment, purchaseTableCount, purchaseTable;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context.next = 4;
                                return investment.methods.getDetailPurchaseCount().call();

                            case 4:
                                purchaseTableCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(purchaseTableCount)).fill().map(function (element, index) {
                                    return investment.methods.detailPurchase(index).call();
                                }));

                            case 7:
                                purchaseTable = _context.sent;
                                return _context.abrupt('return', { address: address, purchaseTable: purchaseTable, purchaseTableCount: purchaseTableCount });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc3BheW1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc1BheW1lbnRyb3dSb3ciLCJ3ZWIzIiwiRGV0YWlsc0FjdGl2aXRpZXMiLCJwcm9wcyIsInB1cmNoYXNlVGFibGUiLCJtYXAiLCJkZXRhaWxzIiwiaW5kZXgiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJhZGRyZXNzIiwicXVlcnkiLCJpbnZlc3RtZW50IiwibWV0aG9kcyIsImdldERldGFpbFB1cmNoYXNlQ291bnQiLCJjYWxsIiwicHVyY2hhc2VUYWJsZUNvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiZGV0YWlsUHVyY2hhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7OztxQ0FhVyxBQUNUO3dCQUFPLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDcEQ7dUNBQU8sQUFBQzt5QkFBRCxBQUNFLEFBQ0w7d0JBRkcsQUFFRyxBQUNOOzZCQUhHLEFBR007O2tDQUhOO29DQUFQLEFBQU8sQUFLVjtBQUxVO0FBQ0gsaUJBREc7QUFEWCxBQUFPLEFBT1YsYUFQVTs7OztpQ0FTSDtnQkFBQSxBQUNHLFNBREgsQUFDb0MsdUJBRHBDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQ29DLHVCQURwQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQ29DLHVCQURwQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDb0MsdUJBRHBDLEFBQzRCLEFBRWhDOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4SUFBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLG1HQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSxtR0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsdUZBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUFosQUFDSSxBQUNJLEFBS0ksQUFHUixpRUFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFiWixBQUNJLEFBRUksQUFVSSxBQUNLLEFBQUssQUFLekI7Ozs7O2lIQTVDNEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEFBQ0YsQTtBLDZDQUFhLDBCQUFBLEFBQVcsQTs7dUNBQ0csV0FBQSxBQUFXLFFBQVgsQUFBbUIseUJBQW5CLEFBQTRDLEE7O2lDQUF2RTtBOzt5REFDc0IsQUFBUSxVQUMxQixTQUFOLEFBQU0sQUFBUyxxQkFBZixBQUFvQyxPQUFwQyxBQUEyQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUM1RDsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixlQUFuQixBQUFrQyxPQUF6QyxBQUFPLEFBQXlDLEFBQ25EO0EsQUFIdUIsQUFDeEIsaUNBQUEsQ0FEd0I7O2lDQUF0QjtBO2lFQUtDLEVBQUMsU0FBRCxTQUFVLGVBQVYsZUFBeUIsb0JBQXpCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWaUIsQSxBQWdEaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc3BheW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==