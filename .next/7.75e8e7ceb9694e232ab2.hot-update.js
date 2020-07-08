webpackHotUpdate(7,{

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _routes = __webpack_require__(760);

var _Layout = __webpack_require__(1159);

var _Layout2 = _interopRequireDefault(_Layout);

var _investment = __webpack_require__(763);

var _investment2 = _interopRequireDefault(_investment);

var _detailsorganizationrow = __webpack_require__(1347);

var _detailsorganizationrow2 = _interopRequireDefault(_detailsorganizationrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Unipi\\Graduate\\Investments\\pages\\investments\\details\\detailsorganizations.js?entry';


var DetailsOrganizations = function (_Component) {
    (0, _inherits3.default)(DetailsOrganizations, _Component);

    function DetailsOrganizations() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DetailsOrganizations);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsOrganizations.__proto__ || (0, _getPrototypeOf2.default)(DetailsOrganizations)).call.apply(_ref, [this].concat(args))), _this), _this.findOrganization = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
                var investment, organizationsaddressesbypaymentmappingTemp;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                investment = (0, _investment2.default)(_this.props.address);
                                _context.next = 3;
                                return investment.methods.getOrganizationsAddressesByPaymentMapping(address).call();

                            case 3:
                                organizationsaddressesbypaymentmappingTemp = _context.sent;
                                return _context.abrupt('return', organizationsaddressesbypaymentmappingTemp);

                            case 5:
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

    (0, _createClass3.default)(DetailsOrganizations, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this3 = this;

            return this.props.organizationsAddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this3.props.address,
                    contributionorganization: _this3.props.contributionorganization,
                    organizationsaddressesbypaymentmapping: _this3.findOrganization(details),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
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
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, '\u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03AF'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/neworganization', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, '\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03BF\u03CD'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address, investment, investmentsummaryTemp, organizationsAddressesCount, organizationsAddresses;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                investment = (0, _investment2.default)(address);
                                _context2.next = 4;
                                return investment.methods.getInvestmentSummary().call();

                            case 4:
                                investmentsummaryTemp = _context2.sent;
                                _context2.next = 7;
                                return investment.methods.getOrganizationsAddressesByMaster().call();

                            case 7:
                                organizationsAddressesCount = _context2.sent;
                                _context2.next = 10;
                                return _promise2.default.all(Array(parseInt(organizationsAddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                organizationsAddresses = _context2.sent;
                                return _context2.abrupt('return', { address: address,
                                    organizationsAddresses: organizationsAddresses,
                                    organizationsAddressesCount: organizationsAddressesCount,
                                    contributionorganization: investmentsummaryTemp[4]
                                });

                            case 12:
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

    return DetailsOrganizations;
}(_react.Component);

exports.default = DetailsOrganizations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc09yZ2FuaXphdGlvblJvdyIsIkRldGFpbHNPcmdhbml6YXRpb25zIiwiZmluZE9yZ2FuaXphdGlvbiIsImFkZHJlc3MiLCJpbnZlc3RtZW50IiwicHJvcHMiLCJtZXRob2RzIiwiZ2V0T3JnYW5pemF0aW9uc0FkZHJlc3Nlc0J5UGF5bWVudE1hcHBpbmciLCJjYWxsIiwib3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wIiwib3JnYW5pemF0aW9uc0FkZHJlc3NlcyIsIm1hcCIsImRldGFpbHMiLCJpbmRleCIsImNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbiIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJpbnZlc3RtZW50c3VtbWFyeVRlbXAiLCJnZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlNYXN0ZXIiLCJvcmdhbml6YXRpb25zQWRkcmVzc2VzQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJvcmdhbml6YXRpb25zYWRkcmVzc2VzZGVjbGFpcmVtYXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBNEI7Ozs7Ozs7OztJQUU3QixBOzs7Ozs7Ozs7Ozs7Ozs7NE8sQUFtQkY7aUdBQW1CLGlCQUFBLEFBQU8sU0FBUDtnQ0FBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDVDtBQURTLDZDQUNJLDBCQUFXLE1BQUEsQUFBSyxNQURwQixBQUNJLEFBQXNCO2dEQUQxQjt1Q0FFMEMsV0FBQSxBQUFXLFFBQVgsQUFBbUIsMENBQW5CLEFBQTZELFNBRnZHLEFBRTBDLEFBQXNFOztpQ0FBekg7QUFGUyxzRkFBQTtpRUFBQSxBQUlSOztpQ0FKUTtpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBOzs7Ozs7Ozs7O3FDQU9OO3lCQUNUOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyx1QkFBWCxBQUFrQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM3RDt1Q0FBTyxBQUFDO3lCQUFELEFBQ0YsQUFDTDt3QkFGTyxBQUVELEFBQ047NkJBSE8sQUFHRSxBQUNUOzZCQUFTLE9BQUEsQUFBSyxNQUpQLEFBSWEsQUFDcEI7OENBQTRCLE9BQUEsQUFBSyxNQUwxQixBQUtnQyxBQUN2Qzs0REFBMEMsT0FBQSxBQUFLLGlCQU54QyxBQU1tQyxBQUFzQjs7a0NBTnpEO29DQUFQLEFBQU8sQUFRVjtBQVJVO0FBQ1AsaUJBRE87QUFEWCxBQUFPLEFBVVYsYUFWVTs7OztpQ0FZSDtnQkFBQSxBQUNHLFNBREgsQUFDb0MsdUJBRHBDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQ29DLHVCQURwQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQ29DLHVCQURwQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDb0MsdUJBRHBDLEFBQzRCLEFBRWhDOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxpRkFBQSxBQUFDLDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sT0FBUixBQUFjLE9BQU0sT0FBcEI7OEJBQUE7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBR1Isb0lBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxxTEFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0Esd0lBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLGlPQUFBLEFBQUM7OzhCQUFEO2dDQVBaLEFBQ0ksQUFDSSxBQUtJLEFBR1I7QUFIUTtBQUFBLGtDQUdQLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQWxCWixBQUNJLEFBT0ksQUFVSSxBQUNLLEFBQUssQUFLekI7Ozs7O21IQWpFNEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEFBQ0YsQTtBLDZDQUFhLDBCQUFXLEEsQUFBWDs7dUNBQ2lCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHVCQUFuQixBQUEwQyxBOztpQ0FBeEU7QTs7dUNBQ29DLFdBQUEsQUFBVyxRQUFYLEFBQW1CLG9DQUFuQixBQUF1RCxBOztpQ0FBM0Y7QTs7eURBQytCLEFBQVEsVUFDckMsU0FBTixBQUFNLEFBQVMsOEJBQWYsQUFBNkMsT0FBN0MsQUFBb0QsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVEsQUFDckU7MkNBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIscUNBQW5CLEFBQXdELE9BQS9ELEFBQU8sQUFBK0QsQUFDekU7QUFIa0MsQUFDbkMsQSxpQ0FBQSxDQURtQzs7aUNBQS9CO0E7b0VBTUUsU0FBRCxBQUNIOzREQURHLEFBRUg7aUVBRkcsQUFHSDs4REFBMEIsc0JBSHZCLEFBR3VCLEFBQXNCLEE7QUFIN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFab0IsQSxBQXFFbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy43NWU4ZTdjZWI5Njk0ZTIzMmFiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW52ZXN0bWVudHMvZGV0YWlscy9kZXRhaWxzb3JnYW5pemF0aW9ucy5qcz8wNDMzY2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBJbnZlc3RtZW50IGZyb20gXCIuLi8uLi8uLi9ldGhwcm9qZWN0L2ludmVzdG1lbnRcIjtcclxuaW1wb3J0IERldGFpbHNPcmdhbml6YXRpb25Sb3cgZnJvbSBcIi4vZGV0YWlsc29yZ2FuaXphdGlvbnJvd1wiO1xyXG5cclxuY2xhc3MgRGV0YWlsc09yZ2FuaXphdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50ID0gSW52ZXN0bWVudChhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50c3VtbWFyeVRlbXAgPSBhd2FpdCBpbnZlc3RtZW50Lm1ldGhvZHMuZ2V0SW52ZXN0bWVudFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgb3JnYW5pemF0aW9uc0FkZHJlc3Nlc0NvdW50ID0gYXdhaXQgaW52ZXN0bWVudC5tZXRob2RzLmdldE9yZ2FuaXphdGlvbnNBZGRyZXNzZXNCeU1hc3RlcigpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBvcmdhbml6YXRpb25zQWRkcmVzc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICBBcnJheShwYXJzZUludChvcmdhbml6YXRpb25zQWRkcmVzc2VzQ291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiBpbnZlc3RtZW50Lm1ldGhvZHMub3JnYW5pemF0aW9uc2FkZHJlc3Nlc2RlY2xhaXJlbWFzdGVyKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHthZGRyZXNzLFxyXG4gICAgICAgICAgICBvcmdhbml6YXRpb25zQWRkcmVzc2VzLFxyXG4gICAgICAgICAgICBvcmdhbml6YXRpb25zQWRkcmVzc2VzQ291bnQsXHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbjogaW52ZXN0bWVudHN1bW1hcnlUZW1wWzRdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kT3JnYW5pemF0aW9uID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50ID0gSW52ZXN0bWVudCh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IG9yZ2FuaXphdGlvbnNhZGRyZXNzZXNieXBheW1lbnRtYXBwaW5nVGVtcCA9IGF3YWl0IGludmVzdG1lbnQubWV0aG9kcy5nZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlQYXltZW50TWFwcGluZyhhZGRyZXNzKS5jYWxsKCk7XHJcbiAgICAgLy8gY29uc29sZS5sb2cob3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wKTtcclxuICAgICAgICByZXR1cm4gb3JnYW5pemF0aW9uc2FkZHJlc3Nlc2J5cGF5bWVudG1hcHBpbmdUZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJvd3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3JnYW5pemF0aW9uc0FkZHJlc3Nlcy5tYXAoKGRldGFpbHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RGV0YWlsc09yZ2FuaXphdGlvblJvd1xyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpZCA9IHtpbmRleH1cclxuICAgICAgICAgICAgZGV0YWlscz17ZGV0YWlsc31cclxuICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfVxyXG4gICAgICAgICAgICBjb250cmlidXRpb25vcmdhbml6YXRpb24gPSB7dGhpcy5wcm9wcy5jb250cmlidXRpb25vcmdhbml6YXRpb259XHJcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbnNhZGRyZXNzZXNieXBheW1lbnRtYXBwaW5nID0ge3RoaXMuZmluZE9yZ2FuaXphdGlvbihkZXRhaWxzKX1cclxuICAgICAgICAgICAgLz47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7SGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHl9ID0gVGFibGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+zp/Pgc6zzrHOvc65z4POvM6/zq88L2gzPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvaW52ZXN0bWVudHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld29yZ2FuaXphdGlvbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCIgYmFzaWMgPs6gz4HOv8+DzrjOrs66zrcgzp/Pgc6zzrHOvc65z4POvM6/z408L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+zpTOt867z4nOvM6tzr3Ov8+CIM6fz4HOs86xzr3Ouc+DzrzPjM+CIM6xz4DPjCDPhM6/zr0gTWFzdGVyPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+zqPPhc68zrzOtc+Ezr/Ph86uIM6fz4HOs86xzr3Ouc+DzrzOv8+NPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+zprOv8+FzrzPgM6vIM+Dz4XOvM68zrXPhM6/z4fOrs+CIM6zzrnOsSDPhM6/zr0gzp/Pgc6zzrHOvc65z4POvM+MPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNPcmdhbml6YXRpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2ludmVzdG1lbnRzL2RldGFpbHMvZGV0YWlsc29yZ2FuaXphdGlvbnMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFRQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7OztBQTFEQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBRUE7QUFEQTtBQUNBO0FBRkE7O0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9