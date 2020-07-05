"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _creator = require("../../ethproject/creator");

var _creator2 = _interopRequireDefault(_creator);

var _investment = require("../../ethproject/investment");

var _investment2 = _interopRequireDefault(_investment);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethproject/web3");

var _web2 = _interopRequireDefault(_web);

var _AddOrganizationsForm = require("../../components/AddOrganizationsForm");

var _AddOrganizationsForm2 = _interopRequireDefault(_AddOrganizationsForm);

var _AddActivityForm = require("../../components/AddActivityForm");

var _AddActivityForm2 = _interopRequireDefault(_AddActivityForm);

var _OrganizationsPayment = require("../../components/OrganizationsPayment");

var _OrganizationsPayment2 = _interopRequireDefault(_OrganizationsPayment);

var _routes = require("../../routes");

var _detailsorganizations = require("./details/detailsorganizations");

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
                statusOfResearchPrev = 'Inactive';
            } else if (statusOfResearch == 1) {
                statusOfResearchPrev = 'Active';
            } else if (statusOfResearch == 2) {
                statusOfResearchPrev = 'Pending';
            } else if (statusOfResearch == 3) {
                statusOfResearchPrev = 'Cancelled';
            } else if (statusOfResearch == 4) {
                statusOfResearchPrev = 'Completed';
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
                        lineNumber: 85
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '5. Αριθμός Activities',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsactivities", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                    }
                }, activitiesTable_length + '/' + activities + '  -- Λεπτομέρειες Activity')),
                description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
            }, {
                header: '6. Επενδυτές',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsinvenstors", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                    }
                }, nowInvestorsAdded + '/' + numInvestors + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '7. Κατάσταση Έρευνας',
                meta: statusOfResearchPrev,
                description: ''
            }, {
                header: '8. Πληροφορίες Πληρωμών',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailspayment", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                    }
                }, 'Λεπτομέρειες')),
                description: ''
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJTaG93SW52ZXN0bWVudCIsInByb3BzIiwibWFzdGVyIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwibnVtSW52ZXN0b3JzIiwibm93SW52ZXN0b3JzQWRkZWQiLCJjb250cmlidXRpb24iLCJhY3Rpdml0aWVzIiwiYWN0aXZpdGllc1RhYmxlX2xlbmd0aCIsInN0YXR1c09mUmVzZWFyY2giLCJzdGF0dXNPZlJlc2VhcmNoUHJldiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJpbnZlc3RtZW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUSxBQUFNLEFBQVksQUFBTSxBQUFNLEFBQVE7O0FBQzlD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QUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7a0NBQUE7b0NBQUEsQUFDSDtBQURHO2lCQUFBLGtCQUNILGNBQUE7O2tDQUFBO29DQUFBLEFBQ0s7QUFETDtBQUFBLG1CQUhSLEFBRVcsQUFDSCxBQUlKOzZCQXhEUixBQUFjLEFBaURWLEFBT2lCLEFBSXJCO0FBWEksQUFDSTs7aURBVUQsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUdWO0FBSFU7YUFBQTs7OztpQ0FLRixBQUNMO21DQUFRLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0o7QUFESTtBQUFBLGFBQUEsa0JBQ0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREksQUFDSixBQUNBLDZGQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBRlIsQUFDSSxBQUNJLEFBQ0ssQUFBSyxBQUdkLGlDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLDZDQUNJLEFBQUMsc0JBQUQsQUFBTTs7OEJBQU47Z0NBVFosQUFBUSxBQUVKLEFBTUksQUFDSSxBQU1mO0FBTmU7QUFBQTs7Ozs7aUgsQUE5SFM7Ozs7O2lDQUNuQjtBLDZDQUFhLDBCQUFXLE1BQUEsQUFBTSxNQUFqQixBQUF1QixBOzt1Q0FDVixXQUFBLEFBQVcsUUFBWCxBQUFtQix1QkFBbkIsQUFBMEMsQTs7aUNBQXBFO0E7OzZDQUdXLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3JCOzRDQUFRLGtCQUZMLEFBRUssQUFBa0IsQUFDMUI7c0RBQWtCLGtCQUhmLEFBR2UsQUFBa0IsQUFDcEM7eUVBQXFDLGtCQUpsQyxBQUlrQyxBQUFrQixBQUN2RDsyREFBdUIsa0JBTHBCLEFBS29CLEFBQWtCLEFBQ3pDOzhEQUEwQixrQkFOdkIsQUFNdUIsQUFBa0IsQUFDNUM7a0RBQWMsa0JBUFgsQUFPVyxBQUFrQixBQUNoQzt1REFBbUIsa0JBUmhCLEFBUWdCLEFBQWtCLEFBQ3JDO2tEQUFjLGtCQVRYLEFBU1csQUFBa0IsQUFDaEM7Z0RBQVksa0JBVlQsQUFVUyxBQUFrQixBQUM5Qjs0REFBd0Isa0JBWHJCLEFBV3FCLEFBQWtCLEFBQzFDO3NEQUFrQixrQkFaZixBQVllLEFBQWtCLEE7QUFaakMsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5hLEEsQUF3STdCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dpbnZlc3RtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=