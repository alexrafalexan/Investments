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

var _creator = require('../../ethproject/creator');

var _creator2 = _interopRequireDefault(_creator);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\showinvestments.js?entry';


var ShowInvestments = function (_Component) {
    (0, _inherits3.default)(ShowInvestments, _Component);

    function ShowInvestments() {
        (0, _classCallCheck3.default)(this, ShowInvestments);

        return (0, _possibleConstructorReturn3.default)(this, (ShowInvestments.__proto__ || (0, _getPrototypeOf2.default)(ShowInvestments)).apply(this, arguments));
    }

    (0, _createClass3.default)(ShowInvestments, [{
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
                    }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 \u0388\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2')),
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
            }, '\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u0395\u03C1\u03B5\u03C5\u03BD\u03CE\u03BD'), _react2.default.createElement(_routes.Link, { route: '/investments/newinvestment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                color: 'red',
                floated: 'right',
                style: { marginTop: '10px' },
                content: '\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u0388\u03C1\u03B5\u03C5\u03BD\u03B1\u03C2',
                icon: 'add',
                basic: true,
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

    return ShowInvestments;
}(_react.Component);

exports.default = ShowInvestments;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnRzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRvciIsIkJ1dHRvbiIsIkNhcmQiLCJMYXlvdXQiLCJMaW5rIiwiU2hvd0ludmVzdG1lbnRzIiwiaXRlbXMiLCJwcm9wcyIsImludmVzdG1lbnRzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJtYXJnaW5Ub3AiLCJyZW5kZXJJbnZlc3RtZW50cyIsIm1ldGhvZHMiLCJnZXRMaXN0T2ZDcmVhdGVkSW52ZXN0bWVudHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFRLEFBQVE7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUdiOzs7Ozs7Ozs7Ozs0Q0FNa0IsQUFDaEI7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLElBQUksbUJBQVcsQUFDaEQ7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYyxBQUFDLDhCQUFLLHlCQUFOLEFBQTZCO3NDQUE3Qjt3Q0FBQSxBQUNWO0FBRFU7cUJBQUEsa0JBQ1YsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUhELEFBRVcsQUFDVixBQUVKOzJCQUxKLEFBQU8sQUFLSSxBQUVkO0FBUFUsQUFDSDtBQUZSLEFBQWMsQUFVZCxhQVZjOztpREFVUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMEdBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7dUJBQUQsQUFDVSxBQUNOO3lCQUZKLEFBRVksQUFDUjt1QkFBTyxFQUFDLFdBSFosQUFHVyxBQUFZLEFBQ25CO3lCQUpKLEFBSVksQUFDUjtzQkFMSixBQUtTLEFBQ0w7dUJBTko7OzhCQUFBO2dDQUpaLEFBRUksQUFDSSxBQUNJLEFBVVA7QUFWTztBQUNJLHVCQVB4QixBQUNJLEFBQ0ksQUFjSyxBQUFLLEFBSXJCOzs7Ozs7Ozs7Ozs7dUNBdkM2QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsOEJBQWhCLEFBQThDLEE7O2lDQUFsRTtBO2lFQUNDLEVBQUMsYUFBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSGUsQSxBQTRDOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd2ludmVzdG1lbnRzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=