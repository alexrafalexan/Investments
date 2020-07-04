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

            return this.props.investorsΑddresses.map(function (details, index) {
                return _react2.default.createElement(_detailsorganizationrow2.default, {
                    key: index,
                    id: index,
                    details: details,
                    address: _this2.props.address,
                    contributionorganization: _this2.props.contributionorganization,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
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
                    lineNumber: 43
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/investments/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, '\u0394\u03B7\u03BB\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD Master'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, '\u039A\u03BF\u03C5\u03BC\u03C0\u03AF \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.renderRows())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, investment, investmentsummaryTemp, investorsΑddressesCount, investorsΑddresses;
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
                                investorsΑddressesCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(investorsΑddressesCount)).fill().map(function (element, index) {
                                    return investment.methods.organizationsaddressesdeclairemaster(index).call();
                                }));

                            case 10:
                                investorsΑddresses = _context.sent;
                                return _context.abrupt('return', { address: address,
                                    investorsΑddresses: investorsΑddresses,
                                    investorsΑddressesCount: investorsΑddressesCount,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcZGV0YWlsc1xcZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJJbnZlc3RtZW50IiwiRGV0YWlsc09yZ2FuaXphdGlvblJvdyIsIkRldGFpbHNPcmdhbml6YXRpb25zIiwicHJvcHMiLCJpbnZlc3RvcnPOkWRkcmVzc2VzIiwibWFwIiwiZGV0YWlscyIsImluZGV4IiwiYWRkcmVzcyIsImNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbiIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiaW52ZXN0bWVudCIsIm1ldGhvZHMiLCJnZXRJbnZlc3RtZW50U3VtbWFyeSIsImNhbGwiLCJpbnZlc3RtZW50c3VtbWFyeVRlbXAiLCJnZXRPcmdhbml6YXRpb25zQWRkcmVzc2VzQnlNYXN0ZXIiLCJpbnZlc3RvcnPOkWRkcmVzc2VzQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJvcmdhbml6YXRpb25zYWRkcmVzc2VzZGVjbGFpcmVtYXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBNEI7Ozs7Ozs7OztJLEFBRTdCOzs7Ozs7Ozs7OztxQ0FtQlc7eUJBQ1Q7O3dCQUFPLEFBQUssTUFBTCxBQUFXLG1CQUFYLEFBQThCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3pEO3VDQUFPLEFBQUM7eUJBQUQsQUFDRixBQUNMO3dCQUZPLEFBRUQsQUFDTjs2QkFITyxBQUdFLEFBQ1Q7NkJBQVMsT0FBQSxBQUFLLE1BSlAsQUFJYSxBQUNwQjs4Q0FBNEIsT0FBQSxBQUFLLE1BTDFCLEFBS2dDOztrQ0FMaEM7b0NBQVAsQUFBTyxBQU9WO0FBUFU7QUFDUCxpQkFETztBQURYLEFBQU8sQUFTVixhQVRVOzs7O2lDQVdIO2dCQUFBLEFBQ0csU0FESCxBQUNvQyx1QkFEcEMsQUFDRztnQkFESCxBQUNXLE1BRFgsQUFDb0MsdUJBRHBDLEFBQ1c7Z0JBRFgsQUFDZ0IsYUFEaEIsQUFDb0MsdUJBRHBDLEFBQ2dCO2dCQURoQixBQUM0QixPQUQ1QixBQUNvQyx1QkFEcEMsQUFDNEIsQUFFaEM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUF4Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFKWixBQUVJLEFBQ0ksQUFDSSxBQUdSLGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EscUxBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTFosQUFDSSxBQUNJLEFBR0ksQUFHUixxTkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFoQlosQUFDSSxBQU9JLEFBUUksQUFDSyxBQUFLLEFBS3pCOzs7OztpSEF2RDRCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNLEFBQWxCLEFBQ0Y7QSw2Q0FBYSwwQkFBQSxBLEFBQVc7O3VDQUNNLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHVCQUFuQixBQUEwQyxBOztpQ0FBeEU7QTs7dUNBQ2dDLFdBQUEsQUFBVyxRQUFYLEFBQW1CLG9DQUFvQyxBLEFBQXZEOztpQ0FBaEM7QTs7eURBQzJCLEFBQVEsVUFDakMsU0FBTixBQUFNLEFBQVMsMEJBQWYsQUFBeUMsT0FBekMsQUFBZ0QsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVEsQUFDakU7MkNBQU8sV0FBQSxBQUFXLFFBQVgsQUFBbUIscUNBQW5CLEFBQXdELE9BQS9ELEFBQU8sQUFBK0QsQUFDekU7QUFIOEIsQUFDL0IsQSxpQ0FBQSxDQUQrQjs7aUNBQTNCO0E7bUVBTUUsU0FBRCxBQUNIO3dEQURHLEFBRUg7NkRBRkcsQUFHSDs4REFBMEIsc0IsQUFIdkIsQUFHdUIsQUFBc0I7QUFIN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFab0IsQSxBQTJEbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc29yZ2FuaXphdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy43NWE1OGE5ZDExZjYxMDA4OTYzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW52ZXN0bWVudHMvZGV0YWlscy9kZXRhaWxzb3JnYW5pemF0aW9ucy5qcz9kNWE5NTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBJbnZlc3RtZW50IGZyb20gXCIuLi8uLi8uLi9ldGhwcm9qZWN0L2ludmVzdG1lbnRcIjtcclxuaW1wb3J0IERldGFpbHNPcmdhbml6YXRpb25Sb3cgZnJvbSBcIi4vZGV0YWlsc29yZ2FuaXphdGlvbnJvd1wiO1xyXG5cclxuY2xhc3MgRGV0YWlsc09yZ2FuaXphdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50ID0gSW52ZXN0bWVudChhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBpbnZlc3RtZW50c3VtbWFyeVRlbXAgPSBhd2FpdCBpbnZlc3RtZW50Lm1ldGhvZHMuZ2V0SW52ZXN0bWVudFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgaW52ZXN0b3JzzpFkZHJlc3Nlc0NvdW50ID0gYXdhaXQgaW52ZXN0bWVudC5tZXRob2RzLmdldE9yZ2FuaXphdGlvbnNBZGRyZXNzZXNCeU1hc3RlcigpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBpbnZlc3RvcnPOkWRkcmVzc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICBBcnJheShwYXJzZUludChpbnZlc3RvcnPOkWRkcmVzc2VzQ291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiBpbnZlc3RtZW50Lm1ldGhvZHMub3JnYW5pemF0aW9uc2FkZHJlc3Nlc2RlY2xhaXJlbWFzdGVyKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHthZGRyZXNzLFxyXG4gICAgICAgICAgICBpbnZlc3RvcnPOkWRkcmVzc2VzLFxyXG4gICAgICAgICAgICBpbnZlc3RvcnPOkWRkcmVzc2VzQ291bnQsXHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbjogaW52ZXN0bWVudHN1bW1hcnlUZW1wWzRdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSb3dzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmludmVzdG9yc86RZGRyZXNzZXMubWFwKChkZXRhaWxzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPERldGFpbHNPcmdhbml6YXRpb25Sb3dcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgaWQgPSB7aW5kZXh9XHJcbiAgICAgICAgICAgIGRldGFpbHM9e2RldGFpbHN9XHJcbiAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgY29udHJpYnV0aW9ub3JnYW5pemF0aW9uID0ge3RoaXMucHJvcHMuY29udHJpYnV0aW9ub3JnYW5pemF0aW9ufVxyXG4gICAgICAgICAgICAvPjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keX0gPSBUYWJsZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5SZXF1ZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9pbnZlc3RtZW50cy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD7OlM63zrvPic68zq3Ovc6/z4Igzp/Pgc6zzrHOvc65z4POvM+Mz4IgzrHPgM+MIM+Ezr/OvSBNYXN0ZXI8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD7Oms6/z4XOvM+Azq8gz4PPhc68zrzOtc+Ezr/Ph86uz4IgzrPOuc6xIM+Ezr/OvSDOn8+BzrPOsc69zrnPg868z4w8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc09yZ2FuaXphdGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaW52ZXN0bWVudHMvZGV0YWlscy9kZXRhaWxzb3JnYW5pemF0aW9ucy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFPQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7OztBQWhEQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBRUE7QUFEQTtBQUNBO0FBRkE7O0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9