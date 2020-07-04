webpackHotUpdate(7,{

/***/ 1348:
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

var _semanticUiReact = __webpack_require__(471);

var _routes = __webpack_require__(752);

var _Layout = __webpack_require__(1122);

var _Layout2 = _interopRequireDefault(_Layout);

var _investment = __webpack_require__(755);

var _investment2 = _interopRequireDefault(_investment);

var _detailsorganizationrow = __webpack_require__(1301);

var _detailsorganizationrow2 = _interopRequireDefault(_detailsorganizationrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js';


var DetailsOrganizations = function (_Component) {
    (0, _inherits3.default)(DetailsOrganizations, _Component);

    function DetailsOrganizations() {
        (0, _classCallCheck3.default)(this, DetailsOrganizations);

        return (0, _possibleConstructorReturn3.default)(this, (DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).apply(this, arguments));
    }

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.organizationsΑddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this2.props.address,
                    contributionorganization: _this2.props.contributionorganization,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, investment, investmentsummaryTemp, organizationsΑddressesCount, organizationsΑddresses;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummaryTemp = _context.sent;
                                _context.next = 7;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsΑddressesCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsΑddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsΑddresses = _context.sent;
                                return _context.abrupt('return', { address: address,
                                    organizationsΑddresses: organizationsΑddresses,
                                    organizationsΑddressesCount: organizationsΑddressesCount,
                                    contributionorganization: investmentsummaryTemp[4]
                                });

                            case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc09yZ2FuaXphdGlvblJvdyIsIkRldGFpbHNPcmdhbml6YXRpb25zIiwicHJvcHMiLCJvcmdhbml6YXRpb25zzpFkZHJlc3NlcyIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsImFkZHJlc3MiLCJjb250cmlidXRpb25vcmdhbml6YXRpb24iLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImludmVzdG1lbnQiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnlUZW1wIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5TWFzdGVyIiwib3JnYW5pemF0aW9uc86RZGRyZXNzZXNDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsIm9yZ2FuaXphdGlvbnNhZGRyZXNzZXNkZWNsYWlyZW1hc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVE7O0FBQ2hCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUE0Qjs7Ozs7Ozs7O0ksQUFFN0I7Ozs7Ozs7Ozs7O3FDQW9CVzt5QkFDVDs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsdUJBQVgsQUFBa0MsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDN0Q7dUNBQU8sQUFBQzt5QkFBRCxBQUNGLEFBQ0w7d0JBRk8sQUFFRCxBQUNOOzZCQUhPLEFBR0UsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKUCxBQUlhLEFBQ3BCOzhDQUE0QixPQUFBLEFBQUssTUFMMUIsQUFLZ0M7O2tDQUxoQztvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNQLGlCQURPO0FBRFgsQUFBTyxBQVNWLGFBVFU7Ozs7aUNBV0g7Z0JBQUEsQUFDRyxTQURILEFBQ29DLHVCQURwQyxBQUNHO2dCQURILEFBQ1csTUFEWCxBQUNvQyx1QkFEcEMsQUFDVztnQkFEWCxBQUNnQixhQURoQixBQUNvQyx1QkFEcEMsQUFDZ0I7Z0JBRGhCLEFBQzRCLE9BRDVCLEFBQ29DLHVCQURwQyxBQUM0QixBQUVoQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyx5QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBR1Isa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxxTEFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMWixBQUNJLEFBQ0ksQUFHSSxBQUdSLHFOQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQWhCWixBQUNJLEFBT0ksQUFRSSxBQUNLLEFBQUssQUFLekI7Ozs7O2lIQXhENEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE0sQUFBbEIsQUFDRjtBLDZDQUFhLDBCQUFBLEEsQUFBVzs7dUNBQ00sV0FBQSxBQUFXLFFBQVgsQUFBbUIsdUJBQW5CLEFBQTBDLEE7O2lDQUF4RTtBOzt1Q0FDb0MsV0FBQSxBQUFXLFFBQVgsQUFBbUIsb0NBQW9DLEEsQUFBdkQ7O2lDQUFwQztBOzt5REFDK0IsQUFBUSxVQUNyQyxTQUFOLEFBQU0sQUFBUyw4QkFBZixBQUE2QyxPQUE3QyxBQUFvRCxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUNyRTsyQ0FBTyxXQUFBLEFBQVcsUUFBWCxBQUFtQixxQ0FBbkIsQUFBd0QsT0FBL0QsQUFBTyxBQUErRCxBQUN6RTtBQUhrQyxBQUNuQyxBLGlDQUFBLENBRG1DOztpQ0FBL0I7QTttRUFPRSxTQUFELEFBQ0g7NERBREcsQUFFSDtpRUFGRyxBQUdIOzhEQUEwQixzQixBQUh2QixBQUd1QixBQUFzQjtBQUg3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJvQixBLEFBNERuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJkZXRhaWxzb3JnYW5pemF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/investments\\details\\detailsorganizations")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy44NWEzZjRkYTdhZDQ5MmNmODcxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW52ZXN0bWVudHMvZGV0YWlscy9kZXRhaWxzb3JnYW5pemF0aW9ucy5qcz9iY2MwZDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBJbnZlc3RtZW50IGZyb20gXCIuLi8uLi8uLi9ldGhwcm9qZWN0L2ludmVzdG1lbnRcIjtcclxuaW1wb3J0IERldGFpbHNPcmdhbml6YXRpb25Sb3cgZnJvbSBcIi4vZGV0YWlsc29yZ2FuaXphdGlvbnJvd1wiO1xyXG5cclxuY2xhc3MgRGV0YWlsc09yZ2FuaXphdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50ID0gSW52ZXN0bWVudChhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50c3VtbWFyeVRlbXAgPSBhd2FpdCBpbnZlc3RtZW50Lm1ldGhvZHMuZ2V0SW52ZXN0bWVudFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgb3JnYW5pemF0aW9uc86RZGRyZXNzZXNDb3VudCA9IGF3YWl0IGludmVzdG1lbnQubWV0aG9kcy5nZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlNYXN0ZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgb3JnYW5pemF0aW9uc86RZGRyZXNzZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgIEFycmF5KHBhcnNlSW50KG9yZ2FuaXphdGlvbnPOkWRkcmVzc2VzQ291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiBpbnZlc3RtZW50Lm1ldGhvZHMub3JnYW5pemF0aW9uc2FkZHJlc3Nlc2RlY2xhaXJlbWFzdGVyKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7YWRkcmVzcyxcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uc86RZGRyZXNzZXMsXHJcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbnPOkWRkcmVzc2VzQ291bnQsXHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbjogaW52ZXN0bWVudHN1bW1hcnlUZW1wWzRdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSb3dzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9yZ2FuaXphdGlvbnPOkWRkcmVzc2VzLm1hcCgoZGV0YWlscywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxEZXRhaWxzT3JnYW5pemF0aW9uUm93XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGlkID0ge2luZGV4fVxyXG4gICAgICAgICAgICBkZXRhaWxzPXtkZXRhaWxzfVxyXG4gICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbiA9IHt0aGlzLnByb3BzLmNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbn1cclxuICAgICAgICAgICAgLz47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7SGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHl9ID0gVGFibGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvaW52ZXN0bWVudHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+zpTOt867z4nOvM6tzr3Ov8+CIM6fz4HOs86xzr3Ouc+DzrzPjM+CIM6xz4DPjCDPhM6/zr0gTWFzdGVyPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+zprOv8+FzrzPgM6vIM+Dz4XOvM68zrXPhM6/z4fOrs+CIM6zzrnOsSDPhM6/zr0gzp/Pgc6zzrHOvc65z4POvM+MPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNPcmdhbml6YXRpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2ludmVzdG1lbnRzL2RldGFpbHMvZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBT0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7QUFqREE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUZBOztBQU9BO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==