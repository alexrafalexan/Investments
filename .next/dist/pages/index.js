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

var _creator = require('../ethproject/creator');

var _creator2 = _interopRequireDefault(_creator);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\MyFiles\\Papei\\Investments\\pages\\index.js?entry';


var InvestmentIndex = function (_Component) {
    (0, _inherits3.default)(InvestmentIndex, _Component);

    function InvestmentIndex() {
        (0, _classCallCheck3.default)(this, InvestmentIndex);

        return (0, _possibleConstructorReturn3.default)(this, (InvestmentIndex.__proto__ || (0, _getPrototypeOf2.default)(InvestmentIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(InvestmentIndex, [{
        key: 'renderInvestments',
        value: function renderInvestments() {
            var items = this.props.investments.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/investments/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2 \u0388\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, ' \u0395\u03BD\u03B5\u03C1\u03B3\u03AD\u03C2 \u0388\u03C1\u03B5\u03C5\u03BD\u03B5\u03C2'), _react2.default.createElement(_routes.Link, { route: '/investments/newinvestment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                style: { marginTop: '10px' },
                content: '\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u0388\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2',
                icon: 'add',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), this.renderInvestments()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var investments;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _creator2.default.methods.getListOfCreatedInvestments().call();

                            case 2:
                                investments = _context.sent;
                                return _context.abrupt('return', { investments: investments });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return InvestmentIndex;
}(_react.Component);

exports.default = InvestmentIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0b3IiLCJCdXR0b24iLCJDYXJkIiwiTGF5b3V0IiwiTGluayIsIkludmVzdG1lbnRJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJpbnZlc3RtZW50cyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWFyZ2luVG9wIiwicmVuZGVySW52ZXN0bWVudHMiLCJtZXRob2RzIiwiZ2V0TGlzdE9mQ3JlYXRlZEludmVzdG1lbnRzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUSxBQUFROztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7NENBTWtCLEFBQ2hCO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFXLEFBQ2hEOzs0QkFBTyxBQUNLLEFBQ1I7aURBQWMsQUFBQyw4QkFBSyx5QkFBTixBQUE2QjtzQ0FBN0I7d0NBQUEsQUFDTjtBQURNO3FCQUFBLGtCQUNOLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFITCxBQUVXLEFBQ04sQUFFUjsyQkFMSixBQUFPLEFBS0ksQUFFZDtBQVBVLEFBQ0g7QUFGUixBQUFjLEFBVWQsYUFWYzs7aURBVVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDJHQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNKO0FBREk7QUFBQSwrQkFDSixBQUFDO3lCQUFELEFBQ1ksQUFDUjt1QkFBTyxFQUFDLFdBRlosQUFFVyxBQUFZLEFBQ25CO3lCQUhKLEFBR1ksQUFDUjtzQkFKSixBQUlTLEFBQ0w7eUJBTEo7OzhCQUFBO2dDQUpKLEFBRUksQUFDSSxBQUNKLEFBU0M7QUFURDtBQUNJLHVCQVBoQixBQUNJLEFBQ0ksQUFhSyxBQUFLLEFBSXJCOzs7Ozs7Ozs7Ozs7dUNBdEM2QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsOEJBQWhCLEFBQThDLEE7O2lDQUFsRTtBO2lFQUNDLEVBQUMsYUFBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSGUsQSxBQTJDOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovTXlGaWxlcy9QYXBlaS9JbnZlc3RtZW50cyJ9