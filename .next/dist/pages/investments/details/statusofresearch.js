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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatusOfResearch.__proto__ || (0, _getPrototypeOf2.default)(StatusOfResearch)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var account, investment;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                account = _context.sent;
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 7;
                                return investment.methods.returnMoney().send({
                                    from: account[0]
                                });

                            case 7:
                            case 'end':
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

    (0, _createClass3.default)(StatusOfResearch, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, '\u03A4\u03BF \u03C3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CC \u03C0\u03BF\u03C3\u03CC \u03C4\u03B7\u03C2 \u03AD\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 ', this.props.contractBalance, ' wei'), _react2.default.createElement(_semanticUiReact.Button, { color: "red", basic: true, onClick: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, '\u0391\u03C0\u03BF\u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, contractBalance, activitiesTableCount, activitiesTable;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context2.next = 4;
                                return investment.methods.getBalance().call();

                            case 4:
                                contractBalance = _context2.sent;
                                _context2.next = 7;
                                return investment.methods.getActivitiesTableCount().call();

                            case 7:
                                activitiesTableCount = _context2.sent;
                                _context2.next = 10;
                                return _promise2.default.all(Array(parseInt(activitiesTableCount)).fill().map(function (element, index) {
                                    return investment.methods.activitiesTable(index).call();
                                }));

                            case 10:
                                activitiesTable = _context2.sent;

                                console.log(contractBalance);

                                return _context2.abrupt('return', { address: address, activitiesTable: activitiesTable, activitiesTableCount: activitiesTableCount, contractBalance: contractBalance });

                            case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcc3RhdHVzb2ZyZXNlYXJjaC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkludmVzdG1lbnQiLCJEZXRhaWxzQWN0aXZpdGllc1JvdyIsIndlYjMiLCJTdGF0dXNPZlJlc2VhcmNoIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwiaW52ZXN0bWVudCIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJyZXR1cm5Nb25leSIsInNlbmQiLCJmcm9tIiwiY29udHJhY3RCYWxhbmNlIiwicXVlcnkiLCJnZXRCYWxhbmNlIiwiY2FsbCIsImdldEFjdGl2aXRpZXNUYWJsZUNvdW50IiwiYWN0aXZpdGllc1RhYmxlQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImFjdGl2aXRpZXNUYWJsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7b08sQUFpQkY7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzZCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQURPLEFBQ1AsQUFBTTtnREFEQzt1Q0FFZSxjQUFBLEFBQUssSUFGcEIsQUFFZSxBQUFTOztpQ0FBekI7QUFGQyxtREFHRDtBQUhDLDZDQUdZLDBCQUFXLE1BQUEsQUFBSyxNQUg1QixBQUdZLEFBQXNCO2dEQUhsQztrREFJRCxBQUFXLFFBQVgsQUFBbUIsY0FBbkIsQUFBaUM7MENBQzdCLFFBTEgsQUFJRCxBQUFzQyxBQUNsQyxBQUFRO0FBRDBCLEFBQ3hDLGlDQURFOztpQ0FKQztpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBOzs7Ozs7Ozs7O2lDQVVILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBd0MsNkxBQUEsQUFBSyxNQUE3QyxBQUFtRCxpQkFEdkQsQUFDSSxBQUNBLHlCQUFBLEFBQUMseUNBQU8sT0FBUixBQUFlLE9BQU8sT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUE7QUFBQTtlQUhSLEFBQ0ksQUFFSSxBQUdYOzs7OzttSEFqQzRCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE0sQUFBTSxNLEFBQWxCLEFBQ0Y7QSw2Q0FBYSwwQkFBVyxBLEFBQVg7O3VDQUNZLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGEsQUFBbkIsQUFBZ0M7O2lDQUF6RDtBOzt1Q0FDNkIsV0FBQSxBQUFXLFFBQVgsQUFBbUIsMEIsQUFBbkIsQUFBNkM7O2lDQUExRTtBOzt5REFDd0IsQUFBUSxVQUM1QixTQUFOLEFBQU0sQUFBUyx1QkFBZixBQUFzQyxPQUF0QyxBQUE2QyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUM5RDsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixnQkFBbkIsQUFBbUMsT0FBMUMsQUFBTyxBQUEwQyxBQUNwRDtBQUh5QixBQUMxQixBLGlDQUFBLENBRDBCOztpQ0FBeEI7QSw0REFNTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7O2tFQUVMLEVBQUMsU0FBRCxTQUFVLGlCQUFWLGlCQUEyQixzQkFBM0Isc0JBQWlELGlCLEFBQWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZGdCLEEsQUFxQy9COztrQkFBQSxBQUFlIiwiZmlsZSI6InN0YXR1c29mcmVzZWFyY2guanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==