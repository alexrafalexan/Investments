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
            errMesag: '',
            load: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var investment, account;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                account = _context.sent;
                                _context.next = 7;
                                return investment.methods.F_MakeAppanage().send({
                                    from: account[0],
                                    value: _this.props.contribution
                                });

                            case 7:

                                console.log(_this.props.contribution);

                            case 8:
                            case "end":
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
                        lineNumber: 50
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
                    lineNumber: 63
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, "\u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AD\u03C2 \u0388\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2"), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, "ID"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, "\u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AE\u03C2"))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, this.renderRows())), _react2.default.createElement(_Button2.default, { color: "green", basic: true, primary: true, onClick: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, "\u0393\u03AF\u03BD\u03B5 \u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AE\u03C2"));
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
                                return _context2.abrupt("return", { address: address,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2ludmVuc3RvcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiVGFibGUiLCJCdXR0b24iLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNJbnZlbnN0b3JzUm93Iiwid2ViMyIsIkRldGFpbHNJbnZlbnN0b3JzIiwic3RhdGUiLCJlcnJNZXNhZyIsImxvYWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwibWV0aG9kcyIsIkZfTWFrZUFwcGFuYWdlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImNvbnRyaWJ1dGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnZlc3RvcnNBZGRyZXNzZXMiLCJtYXAiLCJkZXRhaWxzIiwiaW5kZXgiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiY2FsbCIsImludmVzdG1lbnRzdW1tYXJ5VGVtcCIsImdldEludmVudG9yc0FkZHJlc3NlcyIsImludmVzdG9yc0FkZHJlc3Nlc0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiaW52ZXN0b3JzYWRkcmVzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTTs7QUFDZCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7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