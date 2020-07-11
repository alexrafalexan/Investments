"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Button = require("semantic-ui-react/dist/commonjs/elements/Button");

var _Button2 = _interopRequireDefault(_Button);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _investment = require("../../../ethproject/investment");

var _investment2 = _interopRequireDefault(_investment);

var _detailsinvenstorsrow = require("./detailsinvenstorsrow");

var _detailsinvenstorsrow2 = _interopRequireDefault(_detailsinvenstorsrow);

var _web = require("../../../ethproject/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsinvenstors.js?entry";


var DetailsInvenstors = function (_Component) {
    (0, _inherits3.default)(DetailsInvenstors, _Component);

    function DetailsInvenstors() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DetailsInvenstors);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsInvenstors.__proto__ || (0, _getPrototypeOf2.default)(DetailsInvenstors)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errMessage: '',
            load: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var investment, account;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errMessage: '' });
                                _context.prev = 2;
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                account = _context.sent;
                                _context.next = 9;
                                return investment.methods.F_MakeAppanage().send({
                                    from: account[0],
                                    value: _this.props.contribution
                                });

                            case 9:

                                _routes.Router.replaceRoute("/investments/" + _this.props.address + "/details/detailsinvenstors");

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](2);

                                _this.setState({ errMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DetailsInvenstors, [{
        key: "renderRows",
        value: function renderRows() {
            var _this3 = this;

            return this.props.investorsAddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsinvenstorsrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, "\u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AD\u03C2 \u0388\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2"), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, "ID"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, "\u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AE\u03C2"))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, this.renderRows())), _react2.default.createElement(_Button2.default, { color: "blue", basic: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, "\u0393\u03AF\u03BD\u03B5 \u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AE\u03C2"), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Opps!", content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            })));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, investmentsummaryTemp, investorsAddressesCount, investorsAddresses;
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
                                return investment.methods.getInventorsAddresses().call();

                            case 7:
                                investorsAddressesCount = _context2.sent;
                                _context2.next = 10;
                                return _promise2.default.all(Array(parseInt(investorsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.investorsaddresses(index).call();
                                }));

                            case 10:
                                investorsAddresses = _context2.sent;
                                return _context2.abrupt("return", {
                                    address: address,
                                    investorsAddresses: investorsAddresses,
                                    investorsAddressesCount: investorsAddressesCount,
                                    contribution: investmentsummaryTemp[7]
                                });

                            case 12:
                            case "end":
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

    return DetailsInvenstors;
}(_react.Component);

exports.default = DetailsInvenstors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2ludmVuc3RvcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiVGFibGUiLCJNZXNzYWdlIiwiQnV0dG9uIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIkludmVzdG1lbnQiLCJEZXRhaWxzSW52ZW5zdG9yc1JvdyIsIndlYjMiLCJEZXRhaWxzSW52ZW5zdG9ycyIsInN0YXRlIiwiZXJyTWVzc2FnZSIsImxvYWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwibWV0aG9kcyIsIkZfTWFrZUFwcGFuYWdlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImNvbnRyaWJ1dGlvbiIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJpbnZlc3RvcnNBZGRyZXNzZXMiLCJtYXAiLCJkZXRhaWxzIiwiaW5kZXgiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiY2FsbCIsImludmVzdG1lbnRzdW1tYXJ5VGVtcCIsImdldEludmVudG9yc0FkZHJlc3NlcyIsImludmVzdG9yc0FkZHJlc3Nlc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiaW52ZXN0b3JzYWRkcmVzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFPOztBQUNyQixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZC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LEFBSWY7QUFKZTs7Ozs7O21ILEFBckVhOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQixBQUNFO0EsNkNBQWEsMEJBQUEsQUFBVyxBOzt1Q0FDTSxXQUFBLEFBQVcsUUFBWCxBQUFtQix1QixBQUFuQixBQUEwQzs7aUNBQXhFO0E7O3VDQUNnQyxXQUFBLEFBQVcsUUFBWCxBQUFtQix3QixBQUFuQixBQUEyQzs7aUNBQTNFO0E7O3lEQUMyQixBQUFRLFVBQy9CLFNBQU4sQUFBTSxBQUFTLDBCQUFmLEFBQXlDLE9BQXpDLEFBQWdELElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3BFOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLG1CQUFuQixBQUFzQyxPQUE3QyxBQUFPLEFBQTZDLEFBQ3ZEO0FBSDRCLEFBQzdCLEEsaUNBQUEsQ0FENkI7O2lDQUEzQjtBOzs2Q0FNQyxBQUVIO3dEQUZHLEFBR0g7NkRBSEcsQUFJSDtrREFBYyxzQkFKWCxBQUlXLEFBQXNCLEE7QUFKakMsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxCZ0IsQSxBQWtGaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc2ludmVuc3RvcnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==