'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DetailsOrganizationRowByMaster);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsOrganizationRowByMaster.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizationRowByMaster)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errMessage: '',
            loading: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                    lineNumber: 23
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, details));
        }
    }]);

    return DetailsOrganizationRowByMaster;
}(_react.Component);

exports.default = DetailsOrganizationRowByMaster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnJvd2J5bWFzdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJGb3JtIiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkludmVzdG1lbnQiLCJ3ZWIzIiwiUm91dGVyIiwiRGV0YWlsc09yZ2FuaXphdGlvblJvd0J5TWFzdGVyIiwic3RhdGUiLCJlcnJNZXNzYWdlIiwibG9hZGluZyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU8sQUFBTTs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7Ozs7O2dRLEFBQ0Y7d0JBQVEsQUFDUSxBQUNaO3FCQUZJLEFBRUssQTtBQUZMLEFBQ0o7Ozs7O2lDQU1LO2dCQUFBLEFBRUUsTUFGRixBQUVlLHVCQUZmLEFBRUU7Z0JBRkYsQUFFTyxPQUZQLEFBRWUsdUJBRmYsQUFFTzt5QkFDVSxLQUhqQixBQUdzQjtnQkFIdEIsQUFHRSxZQUhGLEFBR0U7Z0JBSEYsQUFHTSxpQkFITixBQUdNLFNBQXVCLEFBRWxDOzttQ0FDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBSFIsQUFDSSxBQUVJLEFBR1g7Ozs7O0FBbkJ3QyxBLEFBc0I3Qzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzb3JnYW5pemF0aW9ucm93YnltYXN0ZXIuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==