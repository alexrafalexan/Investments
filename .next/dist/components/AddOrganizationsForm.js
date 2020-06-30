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

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\components\\AddOrganizationsForm.js';


var AddOrganizationsForm = function (_Component) {
    (0, _inherits3.default)(AddOrganizationsForm, _Component);

    function AddOrganizationsForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AddOrganizationsForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddOrganizationsForm.__proto__ || (0, _getPrototypeOf2.default)(AddOrganizationsForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
                                return investment.methods.B_AddOrganizations(_this.state.value).send({
                                    from: account[0]
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

    (0, _createClass3.default)(AddOrganizationsForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, '\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'address',
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

    return AddOrganizationsForm;
}(_react.Component);

exports.default = AddOrganizationsForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFkZE9yZ2FuaXphdGlvbnNGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkludmVzdG1lbnQiLCJ3ZWIzIiwiUm91dGVyIiwiQWRkT3JnYW5pemF0aW9uc0Zvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJtZXRob2RzIiwiQl9BZGRPcmdhbml6YXRpb25zIiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBUSxBQUFNLEFBQU87O0FBQzdCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozs0TyxBQUNGO21CQUFPLEFBQ0UsQUFDUDt3QkFGSyxBQUVPLEFBQ1o7cUJBSEssQUFHSSxBO0FBSEosQUFDTCxpQkFLRixBO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjtnQ0FBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ0E7QUFGQyw2Q0FFWSwwQkFBVyxNQUFBLEFBQUssTUFGNUIsQUFFWSxBQUFzQixBQUVyQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sWUFKM0IsQUFJSCxBQUFjLEFBQTRCOztnREFKdkM7Z0RBQUE7dUNBT21CLGNBQUEsQUFBSyxJQVB4QixBQU9tQixBQUFTOztpQ0FBekI7QUFQSCxtREFBQTtnREFBQTtrREFRRyxBQUFXLFFBQVgsQUFBbUIsbUJBQW1CLE1BQUEsQUFBSyxNQUEzQyxBQUFpRCxPQUFqRCxBQUF3RDswQ0FDcEQsUUFUUCxBQVFHLEFBQTZELEFBQ3pELEFBQVE7QUFEaUQsQUFDL0QsaUNBREU7O2lDQUtOOzsrQ0FBQSxBQUFPLCtCQUE2QixNQUFBLEFBQUssTUFidEMsQUFhSCxBQUErQzs7Z0RBYjVDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWdCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBWSxZQWhCeEIsQUFnQkgsQUFBYyxBQUFpQjs7aUNBRy9COztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsT0FBTyxPQW5CNUIsQUFtQkgsQUFBYyxBQUF3Qjs7aUNBbkJuQztpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXdCRjt5QkFDTDs7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx3SUFBQSxBQUFDO3VCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNuQjswQkFBVyx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUYzRCxBQUdJO3VCQUhKLEFBR1UsQUFDTjsrQkFKSixBQUltQjs7OEJBSm5CO2dDQUhSLEFBQ0ksQUFFSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQVZKLEFBVUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQVpSLEFBQ0ksQUFXSSxBQUtYOzs7OztBQWpEOEIsQSxBQW9EbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQWRkT3JnYW5pemF0aW9uc0Zvcm0uanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==