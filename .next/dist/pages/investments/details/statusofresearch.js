'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _investment = require('../../../ethproject/investment');

var _investment2 = _interopRequireDefault(_investment);

var _detailsactiviriesrow = require('./detailsactiviriesrow');

var _detailsactiviriesrow2 = _interopRequireDefault(_detailsactiviriesrow);

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\statusofresearch.js?entry';


var StatusOfResearch = function (_Component) {
    (0, _inherits3.default)(StatusOfResearch, _Component);

    function StatusOfResearch() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, StatusOfResearch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatusOfResearch.__proto__ || (0, _getPrototypeOf2.default)(StatusOfResearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errMessage: '',
            loading: false,
            buttondisable: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var account, investment;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                account = _context.sent;
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 9;
                                return investment.methods.returnMoney().send({
                                    from: account[0]
                                });

                            case 9:
                                _routes.Router.replaceRoute('/investments/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
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

    (0, _createClass3.default)(StatusOfResearch, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.statusOfResearch === 3 || this.props.statusOfResearch === 4) {
                return this.buttondisable = true;
            } else {
                return this.buttondisable = false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, '\u03A4\u03BF \u03C3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CC \u03C0\u03BF\u03C3\u03CC \u03C4\u03B7\u03C2 \u03AD\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 ', _web2.default.utils.fromWei(this.props.contractBalance, 'ether'), ' Ether'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, '\u0397 \u0391\u03C0\u03BF\u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 \u03BC\u03CC\u03BD\u03BF \u03C3\u03C4\u03B7\u03BD \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 Cancelled \u03AE Completed'), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, color: "red", disabled: this.buttondisable, basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, '\u0391\u03C0\u03BF\u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, investmentsummary, contractBalance, activitiesTableCount, activitiesTable;
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
                                return investment.methods.getBalance().call();

                            case 7:
                                contractBalance = _context2.sent;
                                _context2.next = 10;
                                return investment.methods.getActivitiesTableCount().call();

                            case 10:
                                activitiesTableCount = _context2.sent;
                                _context2.next = 13;
                                return _promise2.default.all(Array(parseInt(activitiesTableCount)).fill().map(function (element, index) {
                                    return investment.methods.activitiesTable(index).call();
                                }));

                            case 13:
                                activitiesTable = _context2.sent;

                                console.log(contractBalance);

                                return _context2.abrupt('return', { address: address, activitiesTable: activitiesTable, activitiesTableCount: activitiesTableCount, contractBalance: contractBalance, statusOfResearch: investmentsummary[10] });

                            case 16:
                            case 'end':
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

    return StatusOfResearch;
}(_react.Component);

exports.default = StatusOfResearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcc3RhdHVzb2ZyZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJNZXNzYWdlIiwiVGFibGUiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiSW52ZXN0bWVudCIsIkRldGFpbHNBY3Rpdml0aWVzUm93Iiwid2ViMyIsIlN0YXR1c09mUmVzZWFyY2giLCJzdGF0ZSIsImVyck1lc3NhZ2UiLCJsb2FkaW5nIiwiYnV0dG9uZGlzYWJsZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwiaW52ZXN0bWVudCIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJyZXR1cm5Nb25leSIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInZhbHVlIiwic3RhdHVzT2ZSZXNlYXJjaCIsInV0aWxzIiwiZnJvbVdlaSIsImNvbnRyYWN0QmFsYW5jZSIsInF1ZXJ5IiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiLCJnZXRCYWxhbmNlIiwiZ2V0QWN0aXZpdGllc1RhYmxlQ291bnQiLCJhY3Rpdml0aWVzVGFibGVDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYWN0aXZpdGllc1RhYmxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVEsQUFBTSxBQUFTOztBQUMvQixBQUFRLEFBQU0sQUFBYTs7QUFDM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUEwQjs7OztBQUNqQyxBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7Ozs7OztvTyxBQUNGO3dCQUFPLEFBQ1MsQUFDWjtxQkFGRyxBQUVNLEFBQ1Q7MkJBSEcsQUFHYSxBO0FBSGIsQUFDSCxpQkErQkosQTtpR0FBVyxpQkFBQSxBQUFNLE9BQU47NkJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLFlBRnZCLEFBRVAsQUFBYyxBQUE0QjtnREFGbkM7Z0RBQUE7dUNBSWUsY0FBQSxBQUFLLElBSnBCLEFBSWUsQUFBUzs7aUNBQXpCO0FBSkMsbURBS0Q7QUFMQyw2Q0FLWSwwQkFBVyxNQUFBLEFBQUssTUFMNUIsQUFLWSxBQUFzQjtnREFMbEM7a0RBTUQsQUFBVyxRQUFYLEFBQW1CLGNBQW5CLEFBQWlDOzBDQUM3QixRQVBILEFBTUQsQUFBc0MsQUFDbEMsQUFBUTtBQUQwQixBQUN4QyxpQ0FERTs7aUNBR0Y7K0NBQUEsQUFBTywrQkFBNkIsTUFBQSxBQUFLLE1BVHRDLEFBU0gsQUFBK0M7Z0RBVDVDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVdIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFZLFlBWHhCLEFBV0gsQUFBYyxBQUFpQjs7aUNBRW5DO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFNLE9BYnRCLEFBYVAsQUFBYyxBQUFzQjs7aUNBYjdCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7NkNBVFUsQUFDakI7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxxQkFBWCxBQUFnQyxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcscUJBQW5ELEFBQXdFLEdBQUUsQUFDdEU7dUJBQU8sS0FBQSxBQUFLLGdCQUFaLEFBQTRCLEFBQy9CO0FBRkQsbUJBRUssQUFDRDt1QkFBTyxLQUFBLEFBQUssZ0JBQVosQUFBNEIsQUFDL0I7QUFFSjs7OztpQ0FvQk8sQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUF3QyxzTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixpQkFBdEUsQUFBd0MsQUFBK0MsVUFEdkYsQUFDQSxBQUNJLDJCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDSixpVEFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsT0FBckMsQUFBNEMsT0FBTyxVQUFVLEtBQTdELEFBQWtFLGVBQWUsT0FBakY7OEJBQUE7Z0NBQUE7QUFBQTtlQUhBLEFBR0EsQUFDSSxpRkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQU5aLEFBQ0ksQUFDSSxBQUlJLEFBSWY7QUFKZTs7Ozs7O21IQW5EYSxBOzs7OztpQ0FDakI7QSwwQ0FBWSxNQUFNLEEsTSxBQUFsQixBQUNGO0EsNkNBQWEsMEJBQUEsQUFBVyxBOzt1Q0FDRSxXQUFBLEFBQVcsUUFBWCxBQUFtQix1QkFBbkIsQSxBQUEwQzs7aUNBQXBFO0E7O3VDQUN5QixXQUFBLEFBQVcsUUFBWCxBQUFtQixhQUFuQixBLEFBQWdDOztpQ0FBekQ7QTs7dUNBQzZCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLDBCLEFBQW5CLEFBQTZDOztpQ0FBMUU7QTs7eURBQ3dCLEFBQVEsVUFDNUIsU0FBTixBQUFNLEFBQVMsdUJBQWYsQUFBc0MsT0FBdEMsQUFBNkMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVEsQUFDOUQ7MkNBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIsZ0JBQW5CLEFBQW1DLE9BQTFDLEFBQU8sQUFBMEMsQUFDcEQ7QUFIeUIsQUFDMUIsQSxpQ0FBQSxDQUQwQjs7aUNBQXhCO0EsNERBTU47O3dDQUFBLEFBQVEsSUFBUixBQUFZOztrRUFFTCxFQUFDLFNBQUQsU0FBVSxpQkFBVixpQkFBMkIsc0JBQTNCLHNCQUFpRCxpQkFBakQsaUJBQW1FLGtCQUFrQixrQkFBckYsQUFBcUYsQUFBa0IsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXJCdkYsQSxBQWlFL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic3RhdHVzb2ZyZXNlYXJjaC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9