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

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\components\\AddPercentageInActivityForm.js';


var AddPercentageInActivityForm = function (_Component) {
    (0, _inherits3.default)(AddPercentageInActivityForm, _Component);

    function AddPercentageInActivityForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AddPercentageInActivityForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddPercentageInActivityForm.__proto__ || (0, _getPrototypeOf2.default)(AddPercentageInActivityForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            address: '',
            percentage: '',
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
                                console.log(_this.props.id, _this.state.address, _this.state.percentage);
                                _this.setState({ loading: true, errMessage: '' });
                                _context.prev = 3;
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                account = _context.sent;
                                _context.next = 10;
                                return investment.methods.D_AddPercentageInActivity(_this.props.id, _this.state.address, _this.state.percentage).send({
                                    from: account[0]
                                });

                            case 10:
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

    (0, _createClass3.default)(AddPercentageInActivityForm, [{
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
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03B7\u03BA\u03B7 \u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03BF\u03CD \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD Activity ', this.props.id)), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.address,
                onChange: function onChange(event) {
                    return _this3.setState({ address: event.target.value });
                },
                label: 'address',
                labelPosition: "right",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03BF\u03CD'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.percentage,
                onChange: function onChange(event) {
                    return _this3.setState({ percentage: event.target.value });
                },
                label: '\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03CC',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7'));
        }
    }]);

    return AddPercentageInActivityForm;
}(_react.Component);

exports.default = AddPercentageInActivityForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFkZFBlcmNlbnRhZ2VJbkFjdGl2aXR5Rm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJbnZlc3RtZW50Iiwid2ViMyIsIlJvdXRlciIsIkFkZFBlcmNlbnRhZ2VJbkFjdGl2aXR5Rm9ybSIsInN0YXRlIiwiYWRkcmVzcyIsInBlcmNlbnRhZ2UiLCJlcnJNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImlkIiwic2V0U3RhdGUiLCJpbnZlc3RtZW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwibWV0aG9kcyIsIkRfQWRkUGVyY2VudGFnZUluQWN0aXZpdHkiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVEsQUFBTSxBQUFPOztBQUM3QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7MFAsQUFDRjtxQkFBTyxBQUNNLEFBQ1Q7d0JBRkcsQUFFUyxBQUNaO3dCQUhHLEFBR1MsQUFDWjtxQkFKRyxBLEFBSU07QUFKTixBQUNILGlCQU1KLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO2dDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLElBQUssTUFBQSxBQUFLLE1BQWpDLEFBQXVDLFNBQVMsTUFBQSxBQUFLLE1BQXJELEFBQTJELEFBQzNEO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLFlBSHZCLEFBR1AsQUFBYyxBQUE0QjtnREFFaEM7QUFMSCw2Q0FLZ0IsMEJBQVcsTUFBQSxBQUFLLE1BTGhDLEFBS2dCLEFBQXNCO2dEQUx0Qzt1Q0FNbUIsY0FBQSxBQUFLLElBTnhCLEFBTW1CLEFBQVM7O2lDQUF6QjtBQU5ILG1EQUFBO2dEQUFBO2tEQU9HLEFBQVcsUUFBWCxBQUFtQiwwQkFDckIsTUFBQSxBQUFLLE1BREgsQUFDUyxJQUNYLE1BQUEsQUFBSyxNQUZILEFBRVMsU0FDWCxNQUFBLEFBQUssTUFISCxBQUdTLFlBSFQsQUFJSjswQ0FDUSxRQVpQLEFBT0csQUFJQyxBQUNHLEFBQVE7QUFEWCxBQUNILGlDQUxFOztpQ0FQSDtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFlSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBWSxZQWZ4QixBQWVILEFBQWMsQUFBaUI7O2lDQUduQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sT0FsQnRCLEFBa0JQLEFBQWMsQUFBc0I7O2lDQWxCN0I7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0F1QkY7eUJBQ0w7O21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSwrQkFBTyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBd0MsMEpBQUEsQUFBSyxNQUR4RCxBQUNJLEFBQU8sQUFBbUQsQUFDMUQsc0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLCtMQUFBLEFBQUM7dUJBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25COzBCQUFXLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxNQUFBLEFBQU0sT0FBdkMsQUFBUyxBQUFjLEFBQXVCO0FBRjdELEFBR0k7dUJBSEosQUFHVSxBQUNOOytCQUpKLEFBSW1COzs4QkFKbkI7Z0NBSEosQUFHSSxBQU1BO0FBTkE7QUFDSSxnQ0FLSixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUSixBQVNJLEFBQ0Esc0hBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFXLE1BQUEsQUFBTSxPQUF4QyxBQUFRLEFBQWMsQUFBeUI7QUFGN0QsQUFHSTt1QkFISixBQUdZLEFBQ1I7K0JBSkosQUFJb0I7OzhCQUpwQjtnQ0FYUixBQUNJLEFBVUksQUFPSjtBQVBJO0FBQ0ksaUNBTVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FsQkosQUFrQkksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQXBCUixBQUNJLEFBbUJJLEFBS1g7Ozs7O0FBekRxQyxBLEFBNEQxQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJBZGRQZXJjZW50YWdlSW5BY3Rpdml0eUZvcm0uanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==