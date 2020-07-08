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
            loading: false,
            buttonenable: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var investment, account;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                // Τα παρακάτω στοιχεία τα έπαιρνε απο το showinvestment. Πρέπει να ξαναφτιαχτούν.
                                console.log(_this.props.numOrganizations);
                                console.log(_this.props.nowOrganizationsAdded);

                                investment = (0, _investment2.default)(_this.props.address);

                                if (_this.props.nowOrganizationsAdded < _this.props.numOrganizations) {
                                    _this.setState({ loading: true, errMessage: '', buttonenable: false });
                                    console.log(false);
                                } else {
                                    _this.setState({ loading: true, errMessage: '', buttonenable: false });
                                    console.log(true);
                                }

                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                account = _context.sent;
                                _context.next = 11;
                                return investment.methods.B_AddOrganizations(_this.state.value).send({
                                    from: account[0]
                                });

                            case 11:

                                _routes.Router.replaceRoute('/investments/' + _this.props.address + '/');

                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errMessage: _context.t0.message });

                            case 17:

                                if (_this.props.nowOrganizationsAdded < _this.props.numOrganizations) {
                                    _this.setState({ loading: false, value: '', buttonenable: false });
                                    console.log(false);
                                } else {
                                    _this.setState({ loading: false, value: '', buttonenable: true });
                                    console.log(true);
                                }

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 14]]);
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
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
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
                    lineNumber: 60
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7'));
        }
    }]);

    return AddOrganizationsForm;
}(_react.Component);

exports.default = AddOrganizationsForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFkZE9yZ2FuaXphdGlvbnNGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkludmVzdG1lbnQiLCJ3ZWIzIiwiUm91dGVyIiwiQWRkT3JnYW5pemF0aW9uc0Zvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyTWVzc2FnZSIsImxvYWRpbmciLCJidXR0b25lbmFibGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJudW1Pcmdhbml6YXRpb25zIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwiaW52ZXN0bWVudCIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudCIsIm1ldGhvZHMiLCJCX0FkZE9yZ2FuaXphdGlvbnMiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFRLEFBQU0sQUFBTzs7QUFDN0IsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzRPLEFBQ0Y7bUJBQU8sQUFDSSxBQUNQO3dCQUZHLEFBRVMsQUFDWjtxQkFIRyxBQUdNLEFBQ1Q7MEIsQUFKRyxBQUlXO0FBSlgsQUFDSCxpQkFNSixBO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjtnQ0FBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRU47O0FBQ0E7d0NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2Qjt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBRWpCOztBQVBDLDZDQU9ZLDBCQUFXLE1BQUEsQUFBSyxNQVA1QixBQU9ZLEFBQXNCLEFBRXpDOztvQ0FBRyxNQUFBLEFBQUssTUFBTCxBQUFXLHdCQUF1QixNQUFBLEFBQUssTUFBMUMsQUFBZ0Qsa0JBQWlCLEFBQzdEOzBDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLFlBQWhCLEFBQTRCLElBQUksY0FBOUMsQUFBYyxBQUE4QyxBQUM1RDs0Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBSEQsdUNBR00sQUFDRjswQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxZQUFoQixBQUE0QixJQUFJLGNBQTlDLEFBQWMsQUFBOEMsQUFDNUQ7NENBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQWZNOztnREFBQTtnREFBQTt1Q0FtQm1CLGNBQUEsQUFBSyxJQW5CeEIsQUFtQm1CLEFBQVM7O2lDQUF6QjtBQW5CSCxtREFBQTtnREFBQTtrREFvQkcsQUFBVyxRQUFYLEFBQW1CLG1CQUFtQixNQUFBLEFBQUssTUFBM0MsQUFBaUQsT0FBakQsQUFBd0Q7MENBQ3BELFFBckJQLEFBb0JHLEFBQTZELEFBQ3pELEFBQVE7QUFEaUQsQUFDL0QsaUNBREU7O2lDQUtOOzsrQ0FBQSxBQUFPLCtCQUE2QixNQUFBLEFBQUssTUFBekMsQUFBK0MsVUF6QjVDOztnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUE0Qkg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFlBQVksWUE1QnhCLEFBNEJILEFBQWMsQUFBaUI7O2lDQUduQzs7b0NBQUcsTUFBQSxBQUFLLE1BQUwsQUFBVyx3QkFBdUIsTUFBQSxBQUFLLE1BQTFDLEFBQWdELGtCQUFpQixBQUM3RDswQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsT0FBTyxPQUFqQixBQUF3QixJQUFJLGNBQTFDLEFBQWMsQUFBMEMsQUFDeEQ7NENBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUhELHVDQUdNLEFBQ0Y7MENBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE9BQU8sT0FBakIsQUFBd0IsSUFBSSxjQUExQyxBQUFjLEFBQTBDLEFBQ3hEOzRDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUFyQ007O2lDQUFBO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBd0NGO3lCQUNMOzttQ0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHdJQUFBLEFBQUM7dUJBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25COzBCQUFXLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRjNELEFBR0k7dUJBSEosQUFHVSxBQUNOOytCQUpKLEFBSW1COzs4QkFKbkI7Z0NBSFIsQUFDSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBVkosQUFVSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBWlIsQUFDSSxBQVdJLEFBS1g7Ozs7O0FBbEU4QixBLEFBcUVuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJBZGRPcmdhbml6YXRpb25zRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9