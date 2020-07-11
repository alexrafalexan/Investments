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
                                return investment.methods.C_AddActivity(_web2.default.utils.toWei(_this.state.value, "ether"), _this.state.timeStartActivity, _this.state.duration, _this.state.detail).send({
                                    from: account[0]
                                });

                            case 9:

                                _routes.Router.replaceRoute('/investments/' + _this.props.address + '/details/detailsactivities');

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
                label: 'ether',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFkZEFjdGl2aXR5Rm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJbnZlc3RtZW50Iiwid2ViMyIsIlJvdXRlciIsIkFkZEFjdGl2aXR5Rm9ybSIsInN0YXRlIiwidmFsdWUiLCJ0aW1lU3RhcnRBY3Rpdml0eSIsImR1cmF0aW9uIiwiZGV0YWlsIiwiZXJyTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnQiLCJtZXRob2RzIiwiQ19BZGRBY3Rpdml0eSIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFRLEFBQU0sQUFBTzs7QUFDN0IsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O2tPLEFBQ0Y7bUJBQU8sQUFDRSxBQUNQOytCQUZLLEFBRWMsQUFDbkI7c0JBSEssQUFHSyxBQUNWO29CQUpLLEFBSUUsQUFDUDt3QkFMSyxBQUtPLEFBQ1o7cUIsQUFOSyxBQU1JO0FBTkosQUFDTCxpQixBQVFGO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjtnQ0FBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRUE7O0FBSEMsNkNBR1ksMEJBQVcsTUFBQSxBQUFLLE1BSDVCLEFBR1ksQUFBc0IsQUFFekM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLFlBTHZCLEFBS1AsQUFBYyxBQUE0Qjs7Z0RBTG5DO2dEQUFBO3VDQVFtQixjQUFBLEFBQUssSUFSeEIsQUFRbUIsQUFBUzs7aUNBQXpCO0FBUkgsbURBQUE7Z0RBQUE7a0RBU0csQUFBVyxRQUFYLEFBQW9CLGNBQ3RCLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FEMUIsQUFDRixBQUFrQyxVQUNsQyxNQUFBLEFBQUssTUFGSCxBQUVTLG1CQUNYLE1BQUEsQUFBSyxNQUhILEFBR1MsVUFDWCxNQUFBLEFBQUssTUFKSCxBQUlTLFFBSlQsQUFLQTswQ0FDSSxRQWZQLEFBU0csQUFLSyxBQUNELEFBQVE7QUFEUCxBQUNQLGlDQU5FOztpQ0FTTjs7K0NBQUEsQUFBTywrQkFBNkIsTUFBQSxBQUFLLE1BQXpDLEFBQStDLFVBbEI1Qzs7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBcUJIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFZLFlBckJ4QixBQXFCSCxBQUFjLEFBQWlCOztpQ0FHbkM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFNLE9BeEJ0QixBQXdCUCxBQUFjLEFBQXNCOztpQ0F4QjdCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBMkJGO3lCQUNMOzttQ0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsK0JBQU8sY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRFgsQUFDSSxBQUFPLEFBQ1AsK0VBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLG9HQUFBLEFBQUM7dUJBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25COzBCQUFXLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRjNELEFBR0k7dUJBSEosQUFHVSxBQUNOOytCQUpKLEFBSW1COzs4QkFKbkI7Z0NBSEosQUFHSSxBQU1BO0FBTkE7QUFDSSxnQ0FLSixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUSixBQVNJLEFBQ0EsMEpBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsRUFBQyxtQkFBa0IsTUFBQSxBQUFNLE9BQS9DLEFBQVEsQUFBYyxBQUFnQztBQUZwRSxBQUdJO3VCQUhKLEFBR1ksQUFDUjsrQkFKSixBQUlvQjs7OEJBSnBCO2dDQVZKLEFBVUksQUFNQTtBQU5BO0FBQ0ksZ0NBS0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBaEJKLEFBZ0JJLEFBQ0EseUhBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFTLE1BQUEsQUFBTSxPQUF0QyxBQUFRLEFBQWMsQUFBdUI7QUFGM0QsQUFHSTt1QkFISixBQUdZLEFBQ1I7K0JBSkosQUFJb0I7OzhCQUpwQjtnQ0FqQkosQUFpQkksQUFNQTtBQU5BO0FBQ0ksZ0NBS0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBdkJKLEFBdUJJLEFBQ0EsdUZBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsRUFBQyxRQUFPLE1BQUEsQUFBTSxPQUFwQyxBQUFRLEFBQWMsQUFBcUI7QUFGekQsQUFHSTt1QkFISixBQUdZLEFBQ1I7K0JBSkosQUFJb0I7OzhCQUpwQjtnQ0F6QlIsQUFDSSxBQXdCSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQWhDSixBQWdDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBbENSLEFBQ0ksQUFpQ0ksQUFLWDs7Ozs7QUE3RXlCLEEsQUFnRjlCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFkZEFjdGl2aXR5Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9