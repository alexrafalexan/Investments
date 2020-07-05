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

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\components\\AddActivityForm.js';


var AddActivityForm = function (_Component) {
    (0, _inherits3.default)(AddActivityForm, _Component);

    function AddActivityForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AddActivityForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddActivityForm.__proto__ || (0, _getPrototypeOf2.default)(AddActivityForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            timeStartActivity: '',
            duration: '',
            detail: '',
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
                                return investment.methods.C_AddActivity(_this.state.value, _this.state.timeStartActivity, _this.state.duration, _this.state.detail).send({
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

    (0, _createClass3.default)(AddActivityForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 Activity')), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03A0\u03BF\u03C3\u03BF\u03CD'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'wei',
                labelPosition: "right",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\u03A7\u03C1\u03BF\u03BD\u03B9\u03BA\u03AE \u03A3\u03C4\u03B9\u03B3\u03BC\u03AE \'\u0395\u03BD\u03B1\u03C1\u03BE\u03B7\u03C2 Activity'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.timeStartActivity,
                onChange: function onChange(event) {
                    return _this3.setState({ timeStartActivity: event.target.value });
                },
                label: '\u0394\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '\u039C\u03AD\u03B3\u03B9\u03C3\u03C4\u03B7 \u0394\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 Activity'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.duration,
                onChange: function onChange(event) {
                    return _this3.setState({ duration: event.target.value });
                },
                label: '\u0394\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.detail,
                onChange: function onChange(event) {
                    return _this3.setState({ detail: event.target.value });
                },
                label: '\u039A\u03AD\u03B9\u03BC\u03B5\u03BD\u03BF',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7'));
        }
    }]);

    return AddActivityForm;
}(_react.Component);

exports.default = AddActivityForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFkZEFjdGl2aXR5Rm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJbnZlc3RtZW50Iiwid2ViMyIsIlJvdXRlciIsIkFkZEFjdGl2aXR5Rm9ybSIsInN0YXRlIiwidmFsdWUiLCJ0aW1lU3RhcnRBY3Rpdml0eSIsImR1cmF0aW9uIiwiZGV0YWlsIiwiZXJyTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJtZXRob2RzIiwiQ19BZGRBY3Rpdml0eSIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVEsQUFBTSxBQUFPOztBQUM3QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7a09BQ0YsQTttQkFBTyxBQUNFLEFBQ1A7K0JBRkssQUFFYyxBQUNuQjtzQkFISyxBQUdLLEFBQ1Y7b0JBSkssQUFJRSxBQUNQO3dCQUxLLEFBS08sQUFDWjtxQixBQU5LLEFBTUk7QUFOSixBQUNMLGlCQVFGLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO2dDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFQTs7QUFIQyw2Q0FHWSwwQkFBVyxNQUFBLEFBQUssTUFINUIsQUFHWSxBQUFzQixBQUV6Qzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sWUFMdkIsQUFLUCxBQUFjLEFBQTRCOztnREFMbkM7Z0RBQUE7dUNBUW1CLGNBQUEsQUFBSyxJQVJ4QixBQVFtQixBQUFTOztpQ0FBekI7QUFSSCxtREFBQTtnREFBQTtrREFTRyxBQUFXLFFBQVgsQUFBb0IsY0FDdEIsTUFBQSxBQUFLLE1BREgsQUFDUyxPQUNYLE1BQUEsQUFBSyxNQUZILEFBRVMsbUJBQ1gsTUFBQSxBQUFLLE1BSEgsQUFHUyxVQUNYLE1BQUEsQUFBSyxNQUpILEFBSVMsUUFKVCxBQUtBOzBDQUNJLFFBZlAsQUFTRyxBQUtLLEFBQ0QsQUFBUTtBQURQLEFBQ1AsaUNBTkU7O2lDQVNOOzsrQ0FBQSxBQUFPLCtCQUE2QixNQUFBLEFBQUssTUFsQnRDLEFBa0JILEFBQStDOztnREFsQjVDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXFCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBWSxZQXJCeEIsQUFxQkgsQUFBYyxBQUFpQjs7aUNBR25DOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsT0FBTSxPQXhCdEIsQUF3QlAsQUFBYyxBQUFzQjs7aUNBeEI3QjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQTJCRjt5QkFDTDs7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLCtCQUFPLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURYLEFBQ0ksQUFBTyxBQUNQLCtFQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxvR0FBQSxBQUFDO3VCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNuQjswQkFBVyx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUYzRCxBQUdJO3VCQUhKLEFBR1UsQUFDTjsrQkFKSixBQUltQjs7OEJBSm5CO2dDQUhKLEFBR0ksQUFNQTtBQU5BO0FBQ0ksZ0NBS0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVEosQUFTSSxBQUNBLDBKQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFRLE9BQUEsQUFBSyxTQUFTLEVBQUMsbUJBQWtCLE1BQUEsQUFBTSxPQUEvQyxBQUFRLEFBQWMsQUFBZ0M7QUFGcEUsQUFHSTt1QkFISixBQUdZLEFBQ1I7K0JBSkosQUFJb0I7OzhCQUpwQjtnQ0FWSixBQVVJLEFBTUE7QUFOQTtBQUNJLGdDQUtKLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWhCSixBQWdCSSxBQUNBLHlIQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFRLE9BQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxNQUFBLEFBQU0sT0FBdEMsQUFBUSxBQUFjLEFBQXVCO0FBRjNELEFBR0k7dUJBSEosQUFHWSxBQUNSOytCQUpKLEFBSW9COzs4QkFKcEI7Z0NBakJKLEFBaUJJLEFBTUE7QUFOQTtBQUNJLGdDQUtKLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQXZCSixBQXVCSSxBQUNBLHVGQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFRLE9BQUEsQUFBSyxTQUFTLEVBQUMsUUFBTyxNQUFBLEFBQU0sT0FBcEMsQUFBUSxBQUFjLEFBQXFCO0FBRnpELEFBR0k7dUJBSEosQUFHWSxBQUNSOytCQUpKLEFBSW9COzs4QkFKcEI7Z0NBekJSLEFBQ0ksQUF3QkksQUFPSjtBQVBJO0FBQ0ksaUNBTVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FoQ0osQUFnQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWxDUixBQUNJLEFBaUNJLEFBS1g7Ozs7O0FBN0V5QixBLEFBZ0Y5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBZGRBY3Rpdml0eUZvcm0uanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==