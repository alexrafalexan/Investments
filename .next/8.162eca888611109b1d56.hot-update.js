webpackHotUpdate(8,{

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Layout = __webpack_require__(1111);

var _Layout2 = _interopRequireDefault(_Layout);

var _creator = __webpack_require__(1344);

var _creator2 = _interopRequireDefault(_creator);

var _investment = __webpack_require__(1114);

var _investment2 = _interopRequireDefault(_investment);

var _semanticUiReact = __webpack_require__(463);

var _web = __webpack_require__(731);

var _web2 = _interopRequireDefault(_web);

var _AddOrganizationsForm = __webpack_require__(1348);

var _AddOrganizationsForm2 = _interopRequireDefault(_AddOrganizationsForm);

var _AddActivityForm = __webpack_require__(1349);

var _AddActivityForm2 = _interopRequireDefault(_AddActivityForm);

var _OrganizationsPayment = __webpack_require__(1350);

var _OrganizationsPayment2 = _interopRequireDefault(_OrganizationsPayment);

var _routes = __webpack_require__(547);

var _detailsorganizations = __webpack_require__(1351);

var _detailsorganizations2 = _interopRequireDefault(_detailsorganizations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\showinvestment.js?entry";


var ShowInvestment = function (_Component) {
    (0, _inherits3.default)(ShowInvestment, _Component);

    function ShowInvestment() {
        (0, _classCallCheck3.default)(this, ShowInvestment);

        return (0, _possibleConstructorReturn3.default)(this, (ShowInvestment.__proto__ || (0, _getPrototypeOf2.default)(ShowInvestment)).apply(this, arguments));
    }

    (0, _createClass3.default)(ShowInvestment, [{
        key: "renderCards",
        value: function renderCards() {
            var _props = this.props,
                master = _props.master,
                numOrganizations = _props.numOrganizations,
                nowOrganizationsAddedDeclaireMaster = _props.nowOrganizationsAddedDeclaireMaster,
                nowOrganizationsAdded = _props.nowOrganizationsAdded,
                contributionorganization = _props.contributionorganization,
                numInvestors = _props.numInvestors,
                nowInvestorsAdded = _props.nowInvestorsAdded,
                contribution = _props.contribution,
                activities = _props.activities,
                activitiesTable_length = _props.activitiesTable_length,
                statusOfResearch = _props.statusOfResearch;

            var statusOfResearchPrev = this.props;

            if (statusOfResearch == 0) {
                statusOfResearchPrev = 'Inactive'; //Προσθήκη Συνθηκών σε δεύτερο χρόνο
            }

            var items = [{
                header: '1. Επόπτης Έρευνας',
                meta: master,
                description: 'Ο επόπτης της Έρευνας',
                style: { overflowWrap: 'break-word' }
            }, {
                header: '2. Συνεισφορά ανά Οργανισμού',
                meta: _web2.default.utils.fromWei(contributionorganization, 'ether'),
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε Οργανισμός σαν εγγύηση'
            }, {
                header: '3. Συνεισφορά ανά Επένδυτή',
                meta: _web2.default.utils.fromWei(contribution, 'ether'),
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε επενδυτής'
            }, {
                header: '4. Οργανισμοί',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsorganizations", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }, nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '5. Αριθμός Activities',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsactivities", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, activitiesTable_length + '/' + activities + '  -- Λεπτομέρειες Activity')),
                description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
            }, {
                header: '6. Επενδυτές',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsinvenstors", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                    }
                }, nowInvestorsAdded + '/' + numInvestors + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '7. Κατάσταση Έρευνας',
                meta: statusOfResearchPrev,
                description: ''
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }))));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var investment, investmentsummary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                investment = (0, _investment2.default)(props.query.address);
                                _context.next = 3;
                                return investment.methods.getInvestmentSummary().call();

                            case 3:
                                investmentsummary = _context.sent;
                                return _context.abrupt("return", {
                                    address: props.query.address,
                                    master: investmentsummary[0],
                                    numOrganizations: investmentsummary[1],
                                    nowOrganizationsAddedDeclaireMaster: investmentsummary[2],
                                    nowOrganizationsAdded: investmentsummary[3],
                                    contributionorganization: investmentsummary[4],
                                    numInvestors: investmentsummary[5],
                                    nowInvestorsAdded: investmentsummary[6],
                                    contribution: investmentsummary[7],
                                    activities: investmentsummary[8],
                                    activitiesTable_length: investmentsummary[9],
                                    statusOfResearch: investmentsummary[10]
                                });

                            case 5:
                            case "end":
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

    return ShowInvestment;
}(_react.Component);

exports.default = ShowInvestment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJTaG93SW52ZXN0bWVudCIsInByb3BzIiwibWFzdGVyIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwibnVtSW52ZXN0b3JzIiwibm93SW52ZXN0b3JzQWRkZWQiLCJjb250cmlidXRpb24iLCJhY3Rpdml0aWVzIiwiYWN0aXZpdGllc1RhYmxlX2xlbmd0aCIsInN0YXR1c09mUmVzZWFyY2giLCJzdGF0dXNPZlJlc2VhcmNoUHJldiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJpbnZlc3RtZW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUSxBQUFNLEFBQVksQUFBTSxBQUFNLEFBQVE7O0FBQzlD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QUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBRlIsQUFDSSxBQUNJLEFBQ0ssQUFBSyxBQUdkLGlDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLDZDQUNJLEFBQUMsc0JBQUQsQUFBTTs7OEJBQU47Z0NBVFosQUFBUSxBQUVKLEFBTUksQUFDSSxBQU1mO0FBTmU7QUFBQTs7Ozs7aUgsQUE1R1M7Ozs7O2lDQUNuQjtBLDZDQUFhLDBCQUFXLE1BQUEsQUFBTSxNLEFBQWpCLEFBQXVCOzt1Q0FDVixXQUFBLEFBQVcsUUFBWCxBQUFtQix1QkFBbkIsQSxBQUEwQzs7aUNBQXBFO0E7OzZDQUdXLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3JCOzRDQUFRLGtCQUZMLEFBRUssQUFBa0IsQUFDMUI7c0RBQWtCLGtCQUhmLEFBR2UsQUFBa0IsQUFDcEM7eUVBQXFDLGtCQUpsQyxBQUlrQyxBQUFrQixBQUN2RDsyREFBdUIsa0JBTHBCLEFBS29CLEFBQWtCLEFBQ3pDOzhEQUEwQixrQkFOdkIsQUFNdUIsQUFBa0IsQUFDNUM7a0RBQWMsa0JBUFgsQUFPVyxBQUFrQixBQUNoQzt1REFBbUIsa0JBUmhCLEFBUWdCLEFBQWtCLEFBQ3JDO2tEQUFjLGtCQVRYLEFBU1csQUFBa0IsQUFDaEM7Z0RBQVksa0JBVlQsQUFVUyxBQUFrQixBQUM5Qjs0REFBd0Isa0JBWHJCLEFBV3FCLEFBQWtCLEFBQzFDO3NEQUFrQixrQkFaZixBQVllLEFBQWtCLEE7QUFaakMsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5hLEEsQUFzSDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dpbnZlc3RtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\showinvestment.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Unipi\\Graduate\\Investments\\pages\\investments\\showinvestment.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/investments\\showinvestment")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4xNjJlY2E4ODg2MTExMDliMWQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW52ZXN0bWVudHMvc2hvd2ludmVzdG1lbnQuanM/ODRjODBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uLy4uL2V0aHByb2plY3QvY3JlYXRvclwiO1xyXG5pbXBvcnQgSW52ZXN0bWVudCBmcm9tIFwiLi4vLi4vZXRocHJvamVjdC9pbnZlc3RtZW50XCI7XHJcbmltcG9ydCB7Q2FyZCwgR3JpZENvbHVtbiwgSWNvbiwgR3JpZCwgQnV0dG9uLCBHcmlkUm93fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aHByb2plY3Qvd2ViMyc7XHJcbmltcG9ydCBBZGRPcmdhbml6YXRpb25zRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZGRPcmdhbml6YXRpb25zRm9ybVwiO1xyXG5pbXBvcnQgQWRkQWN0aXZpdHlGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkZEFjdGl2aXR5Rm9ybVwiO1xyXG5pbXBvcnQgT3JnYW5pemF0aW9uc1BheW1lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uc1BheW1lbnRcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgRGV0YWlsc09yZ2FuaXphdGlvbnMgZnJvbSBcIi4vZGV0YWlscy9kZXRhaWxzb3JnYW5pemF0aW9uc1wiO1xyXG5cclxuXHJcbmNsYXNzIFNob3dJbnZlc3RtZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGludmVzdG1lbnQgPSBJbnZlc3RtZW50KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGludmVzdG1lbnRzdW1tYXJ5ID0gYXdhaXQgaW52ZXN0bWVudC5tZXRob2RzLmdldEludmVzdG1lbnRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBtYXN0ZXI6IGludmVzdG1lbnRzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICAgICAgbnVtT3JnYW5pemF0aW9uczogaW52ZXN0bWVudHN1bW1hcnlbMV0sXHJcbiAgICAgICAgICAgICAgICBub3dPcmdhbml6YXRpb25zQWRkZWREZWNsYWlyZU1hc3RlcjogaW52ZXN0bWVudHN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgICAgICBub3dPcmdhbml6YXRpb25zQWRkZWQ6IGludmVzdG1lbnRzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgICAgICAgY29udHJpYnV0aW9ub3JnYW5pemF0aW9uOiBpbnZlc3RtZW50c3VtbWFyeVs0XSxcclxuICAgICAgICAgICAgICAgIG51bUludmVzdG9yczogaW52ZXN0bWVudHN1bW1hcnlbNV0sXHJcbiAgICAgICAgICAgICAgICBub3dJbnZlc3RvcnNBZGRlZDogaW52ZXN0bWVudHN1bW1hcnlbNl0sXHJcbiAgICAgICAgICAgICAgICBjb250cmlidXRpb246IGludmVzdG1lbnRzdW1tYXJ5WzddLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZpdGllczogaW52ZXN0bWVudHN1bW1hcnlbOF0sXHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzVGFibGVfbGVuZ3RoOiBpbnZlc3RtZW50c3VtbWFyeVs5XSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c09mUmVzZWFyY2g6IGludmVzdG1lbnRzdW1tYXJ5WzEwXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlckNhcmRzKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIG1hc3RlcixcclxuICAgICAgICAgICAgICAgIG51bU9yZ2FuaXphdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBub3dPcmdhbml6YXRpb25zQWRkZWREZWNsYWlyZU1hc3RlcixcclxuICAgICAgICAgICAgICAgIG5vd09yZ2FuaXphdGlvbnNBZGRlZCxcclxuICAgICAgICAgICAgICAgIGNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbixcclxuICAgICAgICAgICAgICAgIG51bUludmVzdG9ycyxcclxuICAgICAgICAgICAgICAgIG5vd0ludmVzdG9yc0FkZGVkLFxyXG4gICAgICAgICAgICAgICAgY29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZpdGllcyxcclxuICAgICAgICAgICAgICAgIGFjdGl2aXRpZXNUYWJsZV9sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNPZlJlc2VhcmNoXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNPZlJlc2VhcmNoUHJldiA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzT2ZSZXNlYXJjaCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1c09mUmVzZWFyY2hQcmV2ID0gJ0luYWN0aXZlJzsgIC8vzqDPgc6/z4POuM6uzrrOtyDOo8+Fzr3OuM63zrrPjs69IM+DzrUgzrTOtc+Nz4TOtc+Bzr8gz4fPgc+Mzr3Ov1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICcxLiDOlc+Az4zPgM+EzrfPgiDOiM+BzrXPhc69zrHPgicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YSA6IG1hc3RlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ86fIM61z4DPjM+Az4TOt8+CIM+EzrfPgiDOiM+BzrXPhc69zrHPgicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnMi4gzqPPhc69zrXOuc+Dz4bOv8+BzqwgzrHOvc6sIM6fz4HOs86xzr3Ouc+DzrzOv8+NJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB3ZWIzLnV0aWxzLmZyb21XZWkoY29udHJpYnV0aW9ub3JnYW5pemF0aW9uLCdldGhlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnzqTOvyDPgM6/z4PPjCDPg861IGV0aGVyIM+Azr/PhSDPgM+Bzq3PgM61zrkgzr3OsSDOus6xz4TOsc64zq3Pg861zrkgzr8gzrrOrM64zrUgzp/Pgc6zzrHOvc65z4POvM+Mz4Igz4POsc69IM61zrPOs8+NzrfPg863J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICczLiDOo8+Fzr3Otc65z4PPhs6/z4HOrCDOsc69zqwgzpXPgM6tzr3OtM+Fz4TOricsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YTogd2ViMy51dGlscy5mcm9tV2VpKGNvbnRyaWJ1dGlvbiwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfOpM6/IM+Azr/Pg8+MIM+DzrUgZXRoZXIgz4DOv8+FIM+Az4HOrc+AzrXOuSDOvc6xIM66zrHPhM6xzrjOrc+DzrXOuSDOvyDOus6szrjOtSDOtc+AzrXOvc60z4XPhM6uz4InXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJzQuIM6fz4HOs86xzr3Ouc+DzrzOv86vJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YTogKDxMaW5rIHJvdXRlPXtgL2ludmVzdG1lbnRzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9kZXRhaWxzL2RldGFpbHNvcmdhbml6YXRpb25zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25vd09yZ2FuaXphdGlvbnNBZGRlZCArICcvJyArIG5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyICsgJy8nICsgbnVtT3JnYW5pemF0aW9ucyArICcgIC0tIM6bzrXPgM+Ezr/OvM6tz4HOtc65zrXPgid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+KSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ08gzrHPgc64zrnOvM+Mz4Igz4TPic69IM6fz4HOs86xzr3Ouc+DzrzPjs69IM+Azr/PhSDOrc+Hzr/Phc69IM+Dz4XOvM68zrXPhM6sz4PPh861zrkgz4POtSDPg8+Hzq3Pg863IM68zrUgzrHPhc+Ezr/Pjc+CIM+Azr/PhSDPgM+Bzq3PgM61zrkgzr3OsSDPg8+FzrzOvM61z4TOrM+Dz4fOv8+Fzr0uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICc1LiDOkc+BzrnOuM68z4zPgiBBY3Rpdml0aWVzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiAoPExpbmsgcm91dGU9e2AvaW52ZXN0bWVudHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L2RldGFpbHMvZGV0YWlsc2FjdGl2aXRpZXNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdGllc1RhYmxlX2xlbmd0aCArICcvJyArIGFjdGl2aXRpZXMgKyAnICAtLSDOm861z4DPhM6/zrzOrc+BzrXOuc61z4IgQWN0aXZpdHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfOnyDOsc+BzrnOuM68z4zPgiDPhM+Jzr0gQWN0aXZpdGllcyDPgM6/z4UgzrjOsSDOsc+Azr/PhM61zrvOtc6vz4TOsc65IM63IM6tz4HOtc+Fzr3OsSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnNi4gzpXPgM61zr3OtM+Fz4TOrc+CJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiAgKDxMaW5rIHJvdXRlPXtgL2ludmVzdG1lbnRzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9kZXRhaWxzL2RldGFpbHNpbnZlbnN0b3JzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25vd0ludmVzdG9yc0FkZGVkICsgJy8nICsgbnVtSW52ZXN0b3JzICsgJyAgLS0gzpvOtc+Az4TOv868zq3Pgc61zrnOtc+CJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4pICxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ08gzrHPgc64zrnOvM+Mz4Igz4TPic69IM6Vz4DOtc69zrTPhc+Ez47OvSDPgM6/z4Ugzq3Ph86/z4XOvSDPg8+FzrzOvM61z4TOrM+Dz4fOtc65IM+DzrUgz4PPh86tz4POtyDOvM61IM6xz4XPhM6/z43PgiDPgM6/z4Ugz4DPgc6tz4DOtc65IM69zrEgz4PPhc68zrzOtc+EzqzPg8+Hzr/Phc69LidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnNy4gzprOsc+EzqzPg8+EzrHPg863IM6Iz4HOtc+Fzr3Osc+CJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiBzdGF0dXNPZlJlc2VhcmNoUHJldixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9Lz47XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzPs6bzrXPgM+Ezr/OvM6tz4HOtc65zrXPgjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0xheW91dD4pO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludmVzdG1lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaW52ZXN0bWVudHMvc2hvd2ludmVzdG1lbnQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFhQTtBQVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFJQTtBQU5BO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFOQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBTkE7QUFVQTtBQUNBO0FBSUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUdBO0FBSEE7QUFBQTs7OztBQU1BO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFNQTtBQU5BO0FBQUE7Ozs7Ozs7Ozs7QUEzR0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=