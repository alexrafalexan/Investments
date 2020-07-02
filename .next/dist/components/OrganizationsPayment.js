'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _investment = require('../ethproject/investment');

var _investment2 = _interopRequireDefault(_investment);

var _web = require('../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\MyFiles\\Papei\\Investments\\components\\OrganizationsPayment.js';


var OrganizationsPayment = function (_Component) {
    (0, _inherits3.default)(OrganizationsPayment, _Component);

    function OrganizationsPayment() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, OrganizationsPayment);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OrganizationsPayment.__proto__ || (0, _getPrototypeOf2.default)(OrganizationsPayment)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var investment, account;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                investment = (0, _investment2.default)(_this.props.address);

                                _this.setState({ loading: true, errMessage: '' });

                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                account = _context.sent;
                                _context.next = 9;
                                return investment.methods.E_OrganizationsPayment().send({
                                    from: account[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:

                                _routes.Router.replaceRoute('/investments/' + _this.props.address);

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(OrganizationsPayment, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, '\u0393\u03AF\u03BD\u03B5\u03B9 \u0395\u03C0\u03B5\u03BD\u03B4\u03C5\u03C4\u03AE\u03C2')), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u0391\u03BD\u03B1\u03B3\u03C1\u03B1\u03C6\u03CC\u03BC\u03B5\u03BD\u03BF\u03C5 \u03A0\u03BF\u03C3\u03BF\u03CD'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'wei',
                labelPosition: "right",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7'));
        }
    }]);

    return OrganizationsPayment;
}(_react.Component);

exports.default = OrganizationsPayment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE9yZ2FuaXphdGlvbnNQYXltZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkludmVzdG1lbnQiLCJ3ZWIzIiwiUm91dGVyIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJtZXRob2RzIiwiRV9Pcmdhbml6YXRpb25zUGF5bWVudCIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFRLEFBQU0sQUFBTzs7QUFDN0IsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7OzRPQUNGLEE7bUJBQU8sQUFDSSxBQUNQO3dCQUZHLEFBRVMsQUFDWjtxQkFIRyxBQUdNLEE7QUFITixBQUNILGlCQUtKLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO2dDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFQTs7QUFIQyw2Q0FHWSwwQkFBVyxNQUFBLEFBQUssTUFINUIsQUFHWSxBQUFzQixBQUV6Qzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sWUFMdkIsQUFLUCxBQUFjLEFBQTRCOztnREFMbkM7Z0RBQUE7dUNBUW1CLGNBQUEsQUFBSyxJQVJ4QixBQVFtQixBQUFTOztpQ0FBekI7QUFSSCxtREFBQTtnREFBQTtrREFTRyxBQUFXLFFBQVgsQUFBb0IseUJBQXBCLEFBQTZDOzBDQUN6QyxRQUQ4QyxBQUM5QyxBQUFRLEFBQ2Q7MkNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVhwQyxBQVNHLEFBQWtELEFBRTdDLEFBQW1DO0FBRlUsQUFDcEQsaUNBREU7O2lDQUtOOzsrQ0FBQSxBQUFPLCtCQUE2QixNQUFBLEFBQUssTUFkdEMsQUFjSCxBQUErQzs7Z0RBZDVDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWlCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBWSxZQWpCeEIsQUFpQkgsQUFBYyxBQUFpQjs7aUNBR25DOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsT0FBTSxPQXBCdEIsQUFvQlAsQUFBYyxBQUFzQjs7aUNBcEI3QjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXVCRjt5QkFDTDs7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURYLEFBQ0ksQUFBTyxBQUNQLDJHQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxtTEFBQSxBQUFDO3VCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNuQjswQkFBVyx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUYzRCxBQUdJO3VCQUhKLEFBR1UsQUFDTjsrQkFKSixBQUltQjs7OEJBSm5CO2dDQUpSLEFBQ0ksQUFHSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQVhKLEFBV0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWJSLEFBQ0ksQUFZSSxBQUtYOzs7OztBQWpEOEIsQSxBQW9EbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiT3JnYW5pemF0aW9uc1BheW1lbnQuanMiLCJzb3VyY2VSb290IjoiRTovTXlGaWxlcy9QYXBlaS9JbnZlc3RtZW50cyJ9