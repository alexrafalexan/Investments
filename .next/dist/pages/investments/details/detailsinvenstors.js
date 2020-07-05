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

var _detailsactiviriesrow = require("./detailsactiviriesrow");

var _detailsactiviriesrow2 = _interopRequireDefault(_detailsactiviriesrow);

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
                return _react2.default.createElement(_detailsactiviriesrow2.default, {
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
            }, "ID"))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.renderRows())), _react2.default.createElement(_Button2.default, { color: "green", basic: true, primary: true, onClick: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "\u0393\u03AF\u03BD\u03B5 \u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AE\u03C2"));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, investmentsummary, investorsAddressesCount, investorsAddresses;
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
                                return investment.methods.getInvestmentsAddresses().call();

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
                                    contribution: investmentsummary[7]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2ludmVuc3RvcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiVGFibGUiLCJCdXR0b24iLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNJbnZlbnN0b3Jzcm93Um93Iiwid2ViMyIsIkRldGFpbHNJbnZlbnN0b3JzIiwic3RhdGUiLCJlcnJNZXNhZyIsImxvYWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwibWV0aG9kcyIsIkZfTWFrZUFwcGFuYWdlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImNvbnRyaWJ1dGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnZlc3RvcnNBZGRyZXNzZXMiLCJtYXAiLCJkZXRhaWxzIiwiaW5kZXgiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiY2FsbCIsImludmVzdG1lbnRzdW1tYXJ5IiwiZ2V0SW52ZXN0bWVudHNBZGRyZXNzZXMiLCJpbnZlc3RvcnNBZGRyZXNzZXNDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImludmVzdG9yc2FkZHJlc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU07O0FBQ2QsQUFBTzs7OztBQUNQLEFBQVEsQUFBTSxBQUFhOztBQUMzQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQTZCOzs7O0FBQ3BDLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7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