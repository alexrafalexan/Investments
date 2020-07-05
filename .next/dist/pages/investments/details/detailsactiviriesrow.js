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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsactiviriesrow.js';


var DetailsActivitiesRow = function (_Component) {
    (0, _inherits3.default)(DetailsActivitiesRow, _Component);

    function DetailsActivitiesRow() {
        (0, _classCallCheck3.default)(this, DetailsActivitiesRow);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsActivitiesRow.__proto__ || (0, _getPrototypeOf2.default)(DetailsActivitiesRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsActivitiesRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                details = _props.details; //209 -- 4:38

            var statusOfActivityPrev = this.props;

            if (details.statusActivity == 0) {
                statusOfActivityPrev = 'Inactive';
            } else if (details.statusActivity == 1) {
                statusOfActivityPrev = 'Active';
            } else if (details.statusActivity == 2) {
                statusOfActivityPrev = 'Pending';
            } else if (details.statusActivity == 3) {
                statusOfActivityPrev = 'Cancelled';
            } else if (details.statusActivity == 4) {
                statusOfActivityPrev = 'Completed';
            }

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, details.perscentagecoverage), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, details.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, details.leftvalue), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, statusOfActivityPrev), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, details.timeSecStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, details.timeSecStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, Intl.DateTimeFormat('en-US', {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit"
            }).format(details.timeStartActivity * 1000)), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, Intl.DateTimeFormat('en-US', {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit"
            }).format(details.timeStopActivity * 1000)), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newperscentageinactivity', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_Button2.default, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2')))), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/' + id + '/requests/newpayment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_Button2.default, { color: "green", basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE')))));
        }
    }]);

    return DetailsActivitiesRow;
}(_react.Component);

exports.default = DetailsActivitiesRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxpbmsiLCJMYXlvdXQiLCJEZXRhaWxzQWN0aXZpdGllc1JvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwiZGV0YWlscyIsInN0YXR1c09mQWN0aXZpdHlQcmV2Iiwic3RhdHVzQWN0aXZpdHkiLCJkZXRhaWwiLCJwZXJzY2VudGFnZWNvdmVyYWdlIiwidmFsdWUiLCJsZWZ0dmFsdWUiLCJ0aW1lU2VjU3RhcnRBY3Rpdml0eSIsInRpbWVTZWNTdG9wQWN0aXZpdHkiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZm9ybWF0IiwidGltZVN0YXJ0QWN0aXZpdHkiLCJ0aW1lU3RvcEFjdGl2aXR5IiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUTs7QUFDUixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O2lDQUNJO2dCQUFBLEFBQ0EsTUFEQSxBQUNjLHVCQURkLEFBQ0E7Z0JBREEsQUFDSyxPQURMLEFBQ2MsdUJBRGQsQUFDSzt5QkFDVyxLQUZoQixBQUVxQjtnQkFGckIsQUFFQyxZQUZELEFBRUM7Z0JBRkQsQUFFSyxpQkFGTCxBQUVLLFNBQXVCLEFBRWpDOztnQkFBSSx1QkFBdUIsS0FBM0IsQUFBZ0MsQUFHaEM7O2dCQUFJLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQzVCO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkQsdUJBRVUsUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDbEM7dUNBQUEsQUFBdUIsQUFDMUI7QUFGSyxhQUFBLFVBRUksUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDbEM7dUNBQUEsQUFBdUIsQUFDMUI7QUFGSyxhQUFBLFVBRUksUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDbEM7dUNBQUEsQUFBdUIsQUFDMUI7QUFGSyxhQUFBLE1BRUEsSUFBSSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUNsQzt1Q0FBQSxBQUF1QixBQUMxQjtBQUVKOzttQ0FDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNDO0FBREQ7QUFBQSxhQUFBLGtCQUNFLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREQsQUFDQyxBQUNHLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUZKLEFBRUksQUFBZSxBQUNmLHlCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUhKLEFBR0ksQUFBZSxBQUNmLHNDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpKLEFBSUksQUFBZSxBQUNmLHdCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUxKLEFBS0ksQUFBZSxBQUNmLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBTkosQUFNSSxBQUNBLHVDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQVBKLEFBT0ksQUFBZSxBQUNmLHVDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQVJKLEFBUUksQUFBZSxBQUNmLHNDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLG9CQUFPLEFBQUssZUFBTCxBQUFvQjtzQkFBUSxBQUN6QixBQUNOO3VCQUYrQixBQUV4QixBQUNQO3FCQUgrQixBQUcxQixBQUNMO3NCQUorQixBQUl6QixBQUNOO3dCQUwrQixBQUt2QixBQUNSO3dCQU5HLEFBQTRCLEFBTXZCO0FBTnVCLEFBQy9CLGVBREcsQUFPSixPQUFRLFFBQUQsQUFBUyxvQkFoQnZCLEFBU0ksQUFBTyxBQU8rQixBQUN0Qyx3QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFLLGVBQUwsQUFBb0I7c0JBQVEsQUFDekIsQUFDTjt1QkFGK0IsQUFFeEIsQUFDUDtxQkFIK0IsQUFHMUIsQUFDTDtzQkFKK0IsQUFJekIsQUFDTjt3QkFMK0IsQUFLdkIsQUFDUjt3QkFORyxBQUE0QixBQU12QjtBQU51QixBQUMvQixlQURHLEFBT0osT0FBUSxRQUFELEFBQVMsbUJBeEJ2QixBQWlCSSxBQUFPLEFBTzhCLEFBQ3JDLHdCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxnQkFBbEMsQUFBNkMsS0FBbkQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsa0NBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBNUJoQixBQXlCSSxBQUNJLEFBQ0ksQUFDSSxBQUlaLGdHQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxnQkFBbEMsQUFBNkMsS0FBbkQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFlLFNBQVMsT0FBeEI7OEJBQUE7Z0NBQUE7QUFBQTtlQXBDcEIsQUFDSSxBQWdDSSxBQUNJLEFBQ0ksQUFDSSxBQU1wQjs7Ozs7QUE5RGlDLEEsQUFnRWxDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImRldGFpbHNhY3RpdmlyaWVzcm93LmpzIiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=