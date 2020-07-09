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

var _Button = require('semantic-ui-react/dist/commonjs/elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _investment = require('../../../ethproject/investment');

var _investment2 = _interopRequireDefault(_investment);

var _web = require('../../../ethproject/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizationrowbymaster.js';


var DetailsOrganizationRowByMaster = function (_Component) {
    (0, _inherits3.default)(DetailsOrganizationRowByMaster, _Component);

    function DetailsOrganizationRowByMaster() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DetailsOrganizationRowByMaster);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsOrganizationRowByMaster.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizationRowByMaster)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errMessage: '',
            loading: false
        }, _this.onInsert = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var investment, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.props.organizationsaddressesbypaymentmapping.then(function (val) {
                                console.log(val);
                            });
                            console.log(_this.props.organizationsaddressesbypaymentmapping);

                            _this.setState({ loading: true, errMessage: '' });
                            _context.prev = 3;
                            investment = (0, _investment2.default)(_this.props.address);
                            _context.next = 7;
                            return _web2.default.eth.getAccounts();

                        case 7:
                            accounts = _context.sent;
                            _context.next = 10;
                            return investment.methods.E_OrganizationsPayment().send({
                                from: accounts[0],
                                value: _web2.default.utils.toWei(_this.props.contributionorganization, 'wei')
                            });

                        case 10:

                            _routes.Router.replaceRoute('/investments/' + _this.props.address + '/details/detailsorganizations');

                            _context.next = 16;
                            break;

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](3);

                            _this.setState({ errMessage: _context.t0.message });

                        case 16:

                            _this.setState({ loading: false, value: '' });

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[3, 13]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DetailsOrganizationRowByMaster, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                details = _props.details; //209 -- 4:38

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, details), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onInsert, error: !!this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_Button2.default, { color: 'green', floated: 'left', basic: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE'))));
        }
    }]);

    return DetailsOrganizationRowByMaster;
}(_react.Component);

exports.default = DetailsOrganizationRowByMaster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnJvd2J5bWFzdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJGb3JtIiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkludmVzdG1lbnQiLCJ3ZWIzIiwiUm91dGVyIiwiRGV0YWlsc09yZ2FuaXphdGlvblJvd0J5TWFzdGVyIiwic3RhdGUiLCJlcnJNZXNzYWdlIiwibG9hZGluZyIsIm9uSW5zZXJ0IiwicHJvcHMiLCJvcmdhbml6YXRpb25zYWRkcmVzc2VzYnlwYXltZW50bWFwcGluZyIsInRoZW4iLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJpbnZlc3RtZW50IiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiRV9Pcmdhbml6YXRpb25zUGF5bWVudCIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIlJvdyIsIkNlbGwiLCJpZCIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU8sQUFBTTs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7Ozs7OztnUUFDRixBO3dCQUFRLEFBQ1EsQUFDWjtxQixBQUZJLEFBRUs7QUFGTCxBQUNKLGlCLEFBS0osb0ZBQVcsbUJBQUE7NEJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ1A7a0NBQUEsQUFBSyxNQUFMLEFBQVcsdUNBQVgsQUFBa0QsS0FBSyxVQUFBLEFBQVUsS0FBSyxBQUNsRTt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBRkQsQUFHQTtvQ0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBRXZCOztrQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxZQU52QixBQU1QLEFBQWMsQUFBNEI7NENBRWhDO0FBUkgseUNBUWdCLDBCQUFXLE1BQUEsQUFBSyxNQVJoQyxBQVFnQixBQUFzQjs0Q0FSdEM7bUNBU29CLGNBQUEsQUFBSyxJQVR6QixBQVNvQixBQUFTOzs2QkFBMUI7QUFUSCxnREFBQTs0Q0FBQTs4Q0FVRyxBQUFXLFFBQVgsQUFBbUIseUJBQW5CLEFBQTRDO3NDQUN4QyxTQUQ2QyxBQUM3QyxBQUFTLEFBQ2Y7dUNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QiwwQkFacEMsQUFVRyxBQUFpRCxBQUU1QyxBQUFzRDtBQUZWLEFBQ25ELDZCQURFOzs2QkFLTjs7MkNBQUEsQUFBTywrQkFBNkIsTUFBQSxBQUFLLE1BQXpDLEFBQStDLFVBZjVDOzs0Q0FBQTtBQUFBOzs2QkFBQTs0Q0FBQTs0REFrQkg7O2tDQUFBLEFBQUssU0FBUyxFQUFDLFlBQVksWUFsQnhCLEFBa0JILEFBQWMsQUFBaUI7OzZCQUduQzs7a0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE9BQU8sT0FyQnhCLEFBcUJQLEFBQWMsQUFBd0I7OzZCQXJCL0I7NkJBQUE7NENBQUE7O0FBQUE7cUNBQUE7QTs7Ozs7aUNBeUJGO2dCQUFBLEFBRUUsTUFGRixBQUVlLHVCQUZmLEFBRUU7Z0JBRkYsQUFFTyxPQUZQLEFBRWUsdUJBRmYsQUFFTzt5QkFDVSxLQUhqQixBQUdzQjtnQkFIdEIsQUFHRSxZQUhGLEFBR0U7Z0JBSEYsQUFHTSxpQkFITixBQUdNLFNBQXVCLEFBRWxDOzttQ0FDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBRkosQUFFSSxBQUNBLDBCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFjLFNBQVEsU0FBdEIsQUFBOEIsUUFBTyxPQUFyQyxNQUEyQyxTQUFTLEtBQUEsQUFBSyxNQUF6RCxBQUErRDs4QkFBL0Q7Z0NBQUE7QUFBQTtlQU5oQixBQUNJLEFBR0ksQUFDSSxBQUNJLEFBS25COzs7OztBQWhEd0MsQSxBQW1EN0M7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnJvd2J5bWFzdGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=