webpackHotUpdate(10,{

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(431);

var _Button = __webpack_require__(1308);

var _Button2 = _interopRequireDefault(_Button);

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
                statusOfActivityPrev = 'Inactive'; //Προσθήκη Συνθηκών σε δεύτερο χρόνο
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
                    lineNumber: 26
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, details.detail), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, details.perscentagecoverage), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, details.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, details.leftvalue), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, statusOfActivityPrev), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, details.timeSecStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, details.timeSecStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, details.timeStartActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, details.timeStopActivity), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_Button2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, '\u039B\u03B5\u03C0\u03C1\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2')));
        }
    }]);

    return DetailsActivitiesRow;
}(_react.Component);

exports.default = DetailsActivitiesRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkRldGFpbHNBY3Rpdml0aWVzUm93IiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJkZXRhaWxzIiwic3RhdHVzT2ZBY3Rpdml0eVByZXYiLCJzdGF0dXNBY3Rpdml0eSIsImRldGFpbCIsInBlcnNjZW50YWdlY292ZXJhZ2UiLCJ2YWx1ZSIsImxlZnR2YWx1ZSIsInRpbWVTZWNTdGFydEFjdGl2aXR5IiwidGltZVNlY1N0b3BBY3Rpdml0eSIsInRpbWVTdGFydEFjdGl2aXR5IiwidGltZVN0b3BBY3Rpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUTs7QUFDUixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7OztpQ0FDSTtnQkFBQSxBQUNBLE1BREEsQUFDYyx1QkFEZCxBQUNBO2dCQURBLEFBQ0ssT0FETCxBQUNjLHVCQURkLEFBQ0s7eUJBQ1csS0FGaEIsQUFFcUI7Z0JBRnJCLEFBRUMsWUFGRCxBQUVDO2dCQUZELEFBRUssaUJBRkwsQUFFSyxTQUF1QixBQUVqQzs7Z0JBQUksdUJBQXVCLEtBQTNCLEFBQWdDLEFBR2hDOztnQkFBSSxRQUFBLEFBQVEsa0JBQVosQUFBOEIsR0FBRSxBQUM1Qjt1Q0FENEIsQUFDNUIsQUFBdUIsWUFBYSxBQUN2QztBQUZELHVCQUVVLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkssYUFBQSxVQUVJLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkssYUFBQSxVQUVJLFFBQUEsQUFBUSxrQkFBWixBQUE4QixHQUFFLEFBQ2xDO3VDQUFBLEFBQXVCLEFBQzFCO0FBRkssYUFBQSxNQUVBLElBQUksUUFBQSxBQUFRLGtCQUFaLEFBQThCLEdBQUUsQUFDbEM7dUNBQUEsQUFBdUIsQUFDMUI7QUFFSjs7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDQztBQUREO0FBQUEsYUFBQSxrQkFDRSxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURELEFBQ0MsQUFDRyxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZix5QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFISixBQUdJLEFBQWUsQUFDZixzQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFKSixBQUlJLEFBQWUsQUFDZix3QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFMSixBQUtJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQU5KLEFBTUksQUFDQSx1Q0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFQSixBQU9JLEFBQWUsQUFDZix1Q0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFSSixBQVFJLEFBQWUsQUFDZixzQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFUSixBQVNJLEFBQWUsQUFDZixvQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFWSixBQVVJLEFBQWUsQUFDZixtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsZUFiWixBQUNJLEFBV0ksQUFDSSxBQUlaOzs7OztBQXJDaUMsQSxBQXVDbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsactiviriesrow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsactiviriesrow.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/investments\\details\\detailsactiviriesrow")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuNTczZWViMmE3N2I3YWVmMWMzNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2ludmVzdG1lbnRzL2RldGFpbHMvZGV0YWlsc2FjdGl2aXJpZXNyb3cuanM/ZWZhMjI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdC9kaXN0L2NvbW1vbmpzL2VsZW1lbnRzL0J1dHRvblwiO1xyXG5cclxuY2xhc3MgRGV0YWlsc0FjdGl2aXRpZXNSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gcmVuZGVyKCkge1xyXG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICAgIGNvbnN0IHtpZCwgZGV0YWlsc30gPSB0aGlzLnByb3BzOyAvLzIwOSAtLSA0OjM4XHJcblxyXG4gICAgIGxldCBzdGF0dXNPZkFjdGl2aXR5UHJldiA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICBpZiAoZGV0YWlscy5zdGF0dXNBY3Rpdml0eSA9PSAwKXtcclxuICAgICAgICAgc3RhdHVzT2ZBY3Rpdml0eVByZXYgPSAnSW5hY3RpdmUnOyAgLy/OoM+Bzr/Pg864zq7Ous63IM6jz4XOvc64zrfOus+Ozr0gz4POtSDOtM61z43PhM61z4HOvyDPh8+Bz4zOvc6/XHJcbiAgICAgfWVsc2UgaWYgKGRldGFpbHMuc3RhdHVzQWN0aXZpdHkgPT0gMSl7XHJcbiAgICAgICAgIHN0YXR1c09mQWN0aXZpdHlQcmV2ID0gJ0FjdGl2ZSc7XHJcbiAgICAgfWVsc2UgaWYgKGRldGFpbHMuc3RhdHVzQWN0aXZpdHkgPT0gMil7XHJcbiAgICAgICAgIHN0YXR1c09mQWN0aXZpdHlQcmV2ID0gJ1BlbmRpbmcnO1xyXG4gICAgIH1lbHNlIGlmIChkZXRhaWxzLnN0YXR1c0FjdGl2aXR5ID09IDMpe1xyXG4gICAgICAgICBzdGF0dXNPZkFjdGl2aXR5UHJldiA9ICdDYW5jZWxsZWQnO1xyXG4gICAgIH1lbHNlIGlmIChkZXRhaWxzLnN0YXR1c0FjdGl2aXR5ID09IDQpe1xyXG4gICAgICAgICBzdGF0dXNPZkFjdGl2aXR5UHJldiA9ICdDb21wbGV0ZWQnO1xyXG4gICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFJvdz5cclxuICAgICAgIDxDZWxsPntpZH08L0NlbGw+XHJcbiAgICAgICAgICA8Q2VsbD57ZGV0YWlscy5kZXRhaWx9PC9DZWxsPlxyXG4gICAgICAgICAgPENlbGw+e2RldGFpbHMucGVyc2NlbnRhZ2Vjb3ZlcmFnZX08L0NlbGw+XHJcbiAgICAgICAgICA8Q2VsbD57ZGV0YWlscy52YWx1ZX08L0NlbGw+XHJcbiAgICAgICAgICA8Q2VsbD57ZGV0YWlscy5sZWZ0dmFsdWV9PC9DZWxsPlxyXG4gICAgICAgICAgPENlbGw+e3N0YXR1c09mQWN0aXZpdHlQcmV2fTwvQ2VsbD5cclxuICAgICAgICAgIDxDZWxsPntkZXRhaWxzLnRpbWVTZWNTdGFydEFjdGl2aXR5fTwvQ2VsbD5cclxuICAgICAgICAgIDxDZWxsPntkZXRhaWxzLnRpbWVTZWNTdG9wQWN0aXZpdHl9PC9DZWxsPlxyXG4gICAgICAgICAgPENlbGw+e2RldGFpbHMudGltZVN0YXJ0QWN0aXZpdHl9PC9DZWxsPlxyXG4gICAgICAgICAgPENlbGw+e2RldGFpbHMudGltZVN0b3BBY3Rpdml0eX08L0NlbGw+XHJcbiAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPs6bzrXPgM+Bzr/OvM6tz4HOuc61z4I8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgKTtcclxuIH1cclxufVxyXG4gZXhwb3J0IGRlZmF1bHQgRGV0YWlsc0FjdGl2aXRpZXNSb3c7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2ludmVzdG1lbnRzL2RldGFpbHMvZGV0YWlsc2FjdGl2aXJpZXNyb3cuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUZBO0FBSUE7QUFGQTtBQUlBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=