webpackHotUpdate(5,{

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = __webpack_require__(498);

var _routes = __webpack_require__(728);

var _Layout = __webpack_require__(1110);

var _Layout2 = _interopRequireDefault(_Layout);

var _investment = __webpack_require__(1112);

var _investment2 = _interopRequireDefault(_investment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js?entry';

// import DetailsOrganizationRow from "./detailsorganizationrow";

var DetailsOrganizations = function (_Component) {
    (0, _inherits3.default)(DetailsOrganizations, _Component);

    function DetailsOrganizations() {
        (0, _classCallCheck3.default)(this, DetailsOrganizations);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'render',

        // renderRows() {
        //     return this.props.activitiesTable.map((details, index) => {
        //         return <DetailsOrganizationRow
        //         key={index}
        //         id = {index}
        //         details={details}
        //         address={this.props.address}
        //         />;
        //     })
        // }

        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, investment, investorsΑddressesCount, investorsΑddresses;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context.next = 4;
                                return investment.methods.getInvestorsAddressesByMaster().call();

                            case 4:
                                investorsΑddressesCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(investorsΑddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 7:
                                investorsΑddresses = _context.sent;

                                console.log(investorsΑddresses);

                                return _context.abrupt('return', { address: address });

                            case 10:
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

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInByb3BzIiwiYWRkcmVzcyIsInF1ZXJ5IiwiaW52ZXN0bWVudCIsIm1ldGhvZHMiLCJnZXRJbnZlc3RvcnNBZGRyZXNzZXNCeU1hc3RlciIsImNhbGwiLCJpbnZlc3RvcnPOkWRkcmVzc2VzQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9yZ2FuaXphdGlvbnNhZGRyZXNzZXNkZWNsYWlyZW1hc3RlciIsImludmVzdG9yc86RZGRyZXNzZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUTs7QUFDaEIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7Ozs7Ozs7QUFDdkI7O0ksQUFFTTs7Ozs7Ozs7OzthQWdCRjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztpQ0FFUTtnQkFBQSxBQUNHLFNBREgsQUFDb0MsdUJBRHBDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQ29DLHVCQURwQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQ29DLHVCQURwQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDb0MsdUJBRHBDLEFBQzRCLEFBRWhDOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZSLEFBQ0ksQUFDSSxBQTZCWDs7Ozs7aUhBNUQ0QixBOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTUFBbEIsQSxBQUNGO0EsNkNBQWEsMEJBQUEsQSxBQUFXOzt1Q0FDUSxXQUFBLEFBQVcsUUFBWCxBQUFtQixnQ0FBbkIsQSxBQUFtRDs7aUNBQW5GO0E7O3lEQUMyQixBQUFRLFVBQ2pDLFNBQU4sQUFBTSxBQUFTLDBCQUFmLEFBQXlDLE9BQXpDLEFBQWdELElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQ2pFOzJDQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHFDQUFuQixBQUF3RCxPQUEvRCxBQUFPLEFBQStELEFBQ3pFO0EsQUFIOEIsQUFDL0IsaUNBQUEsQ0FEK0I7O2lDQUEzQjtBLDhEQU1OOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7aUVBRUwsRUFBQyxTQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFib0IsQSxBQWdFbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/investments\\details\\detailsorganizations")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZTIzOTJhZjcwNDJkNWFiMGE5My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW52ZXN0bWVudHMvZGV0YWlscy9kZXRhaWxzb3JnYW5pemF0aW9ucy5qcz8yYjRiODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBJbnZlc3RtZW50IGZyb20gXCIuLi8uLi8uLi9ldGhwcm9qZWN0L2ludmVzdG1lbnRcIjtcclxuLy8gaW1wb3J0IERldGFpbHNPcmdhbml6YXRpb25Sb3cgZnJvbSBcIi4vZGV0YWlsc29yZ2FuaXphdGlvbnJvd1wiO1xyXG5cclxuY2xhc3MgRGV0YWlsc09yZ2FuaXphdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50ID0gSW52ZXN0bWVudChhZGRyZXNzKVxyXG4gICAgICAgIGNvbnN0IGludmVzdG9yc86RZGRyZXNzZXNDb3VudCA9IGF3YWl0IGludmVzdG1lbnQubWV0aG9kcy5nZXRJbnZlc3RvcnNBZGRyZXNzZXNCeU1hc3RlcigpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBpbnZlc3RvcnPOkWRkcmVzc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICBBcnJheShwYXJzZUludChpbnZlc3RvcnPOkWRkcmVzc2VzQ291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiBpbnZlc3RtZW50Lm1ldGhvZHMub3JnYW5pemF0aW9uc2FkZHJlc3Nlc2RlY2xhaXJlbWFzdGVyKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZXN0b3JzzpFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7YWRkcmVzc307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVuZGVyUm93cygpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3Rpdml0aWVzVGFibGUubWFwKChkZXRhaWxzLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gPERldGFpbHNPcmdhbml6YXRpb25Sb3dcclxuICAgIC8vICAgICAgICAga2V5PXtpbmRleH1cclxuICAgIC8vICAgICAgICAgaWQgPSB7aW5kZXh9XHJcbiAgICAvLyAgICAgICAgIGRldGFpbHM9e2RldGFpbHN9XHJcbiAgICAvLyAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgIC8vICAgICAgICAgLz47XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7SGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHl9ID0gVGFibGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgey8qPExpbmsgcm91dGU9e2AvaW52ZXN0bWVudHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgIDxhPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8QnV0dG9uIHByaW1hcnk+QWRkIFJlcXVlc3Q8L0J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyo8VGFibGU+Ki99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgPEhlYWRlcj4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPFJvdz4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPEhlYWRlckNlbGw+zpvOtc+Az4TOv868zq3Pgc65zrXPgjwvSGVhZGVyQ2VsbD4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxIZWFkZXJDZWxsPs6gzr/Pg86/z4PPhM+MIM6azqzOu863z4jOt8+CIEFjdGl2aXR5PC9IZWFkZXJDZWxsPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPEhlYWRlckNlbGw+zqPPhc69zr/Ou865zrrPjCDOoM6/z4PPjCBBY3Rpdml0eTwvSGVhZGVyQ2VsbD4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxIZWFkZXJDZWxsPs6UzrnOsc64zq3Pg865zrzOvyDOoM6/z4PPjCBBY3Rpdml0eTwvSGVhZGVyQ2VsbD4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxIZWFkZXJDZWxsPs6azrHPhM6sz4PPhM6xz4POtzwvSGVhZGVyQ2VsbD4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxIZWFkZXJDZWxsPs6Izr3Osc+Bzr7OtyBBY3Rpdml0eSAozqfPgc6/zr0uIM6UzrnOrM66zrXOuc6xKTwvSGVhZGVyQ2VsbD4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxIZWFkZXJDZWxsPs6bzq7Ovs63IEFjdGl2aXR5ICjOp8+Bzr/OvS4gzpTOuc6szrrOtc65zrEpPC9IZWFkZXJDZWxsPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPEhlYWRlckNlbGw+zojOvc6xz4HOvs63IEFjdGl2aXR5PC9IZWFkZXJDZWxsPiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPEhlYWRlckNlbGw+zpvOrs6+zrcgQWN0aXZpdHk8L0hlYWRlckNlbGw+Ki99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9Sb3c+Ki99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgPC9IZWFkZXI+Ki99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgPEJvZHk+Ki99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX0qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICA8L0JvZHk+Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyo8L1RhYmxlPiovfVxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzT3JnYW5pemF0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9pbnZlc3RtZW50cy9kZXRhaWxzL2RldGFpbHNvcmdhbml6YXRpb25zLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBOUJBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBRUE7QUFEQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=