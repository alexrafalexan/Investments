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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _AddPercentageInActivityForm = require('../../../components/AddPercentageInActivityForm');

var _AddPercentageInActivityForm2 = _interopRequireDefault(_AddPercentageInActivityForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\requests\\newperscentageinactivity.js?entry';


var AddOrganization = function (_Component) {
    (0, _inherits3.default)(AddOrganization, _Component);

    function AddOrganization() {
        (0, _classCallCheck3.default)(this, AddOrganization);

        return (0, _possibleConstructorReturn3.default)(this, (AddOrganization.__proto__ || (0, _getPrototypeOf2.default)(AddOrganization)).apply(this, arguments));
    }

    (0, _createClass3.default)(AddOrganization, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, '\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03AC \u039A\u03AC\u03BB\u03C5\u03C8\u03B7\u03C2 Activity'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_AddPercentageInActivityForm2.default, { address: this.props.address, id: this.props.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, id;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                id = props.query.id;
                                return _context.abrupt('return', { address: address, id: id });

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return AddOrganization;
}(_react.Component);

exports.default = AddOrganization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xccmVxdWVzdHNcXG5ld3BlcnNjZW50YWdlaW5hY3Rpdml0eS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkdyaWQiLCJHcmlkUm93IiwiTGluayIsIkxheW91dCIsIkFkZFBlcmNlbnRhZ2VJbkFjdGl2aXR5Rm9ybSIsIkFkZE9yZ2FuaXphdGlvbiIsInByb3BzIiwiYWRkcmVzcyIsImlkIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVEsQUFBTTs7QUFDdEIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFpQzs7Ozs7Ozs7O0ksQUFFbEM7Ozs7Ozs7Ozs7O2lDQU9PLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUhBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVEQUE0QixTQUFVLEtBQUEsQUFBSyxNQUE1QyxBQUFrRCxTQUFTLElBQU0sS0FBQSxBQUFLLE1BQXRFLEFBQTRFOzhCQUE1RTtnQ0FOcEIsQUFDSSxBQUVJLEFBQ0ksQUFDSSxBQUNJLEFBTXZCO0FBTnVCOzs7Ozs7aUgsQUFiSzs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE0sQUFBbEIsQUFDQTtBLHFDQUFPLE0sQUFBTSxNQUFiLEE7aUVBQ0QsRUFBQyxTQUFELFNBQVUsSSxBQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSmUsQSxBQXVCOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3cGVyc2NlbnRhZ2VpbmFjdGl2aXR5LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=