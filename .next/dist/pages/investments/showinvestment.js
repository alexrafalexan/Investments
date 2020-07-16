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
            } else if (statusOfResearch == 5) {
                statusOfResearchPrev = 'InactiveClosed';
            } else if (statusOfResearch == 6) {
                statusOfResearchPrev = 'CancelledClosed';
            } else if (statusOfResearch == 7) {
                statusOfResearchPrev = 'CompletedClosed';
            }

            var items = [{
                header: '1. Επόπτης Έρευνας',
                meta: master,
                description: 'Ο επόπτης της Έρευνας',
                style: { overflowWrap: 'break-word' }
            }, {
                header: '2. Συνεισφορά ανά Οργανισμού',
                meta: _web2.default.utils.fromWei(contributionorganization, 'ether') + ' Ether',
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε Οργανισμός σαν εγγύηση'
            }, {
                header: '3. Συνεισφορά ανά Επένδυτή',
                meta: _web2.default.utils.fromWei(contribution, 'ether') + ' Ether',
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε επενδυτής'
            }, {
                header: '4. Οργανισμοί',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsorganizations", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                }, nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '5. Αριθμός Activities',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsactivities", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                    }
                }, activitiesTable_length + '/' + activities + '  -- Λεπτομέρειες Activity')),
                description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
            }, {
                header: '6. Επενδυτές',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsinvenstors", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                    }
                }, nowInvestorsAdded + '/' + numInvestors + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '7. Πληροφορίες Πληρωμών',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailspayment", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119
                    }
                }, 'Λεπτομέρειες')),
                description: ''
            }, {
                header: '8. Κατάσταση Έρευνας',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/statusofresearch", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 127
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                    }
                }, statusOfResearchPrev + '  -- Ενέργειες')),
                description: ''
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJTaG93SW52ZXN0bWVudCIsInByb3BzIiwibWFzdGVyIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwibnVtSW52ZXN0b3JzIiwibm93SW52ZXN0b3JzQWRkZWQiLCJjb250cmlidXRpb24iLCJhY3Rpdml0aWVzIiwiYWN0aXZpdGllc1RhYmxlX2xlbmd0aCIsInN0YXR1c09mUmVzZWFyY2giLCJzdGF0dXNPZlJlc2VhcmNoUHJldiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJpbnZlc3RtZW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUSxBQUFNLEFBQVksQUFBTSxBQUFNLEFBQVE7O0FBQzlD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LEFBQ0ksQUFNZjtBQU5lO0FBQUE7Ozs7O2lILEFBeElTOzs7OztpQ0FDbkI7QSw2Q0FBYSwwQkFBVyxNQUFBLEFBQU0sTUFBakIsQSxBQUF1Qjs7dUNBQ1YsV0FBQSxBQUFXLFFBQVgsQUFBbUIsdUJBQW5CLEEsQUFBMEM7O2lDQUFwRTtBOzs2Q0FHVyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjs0Q0FBUSxrQkFGTCxBQUVLLEFBQWtCLEFBQzFCO3NEQUFrQixrQkFIZixBQUdlLEFBQWtCLEFBQ3BDO3lFQUFxQyxrQkFKbEMsQUFJa0MsQUFBa0IsQUFDdkQ7MkRBQXVCLGtCQUxwQixBQUtvQixBQUFrQixBQUN6Qzs4REFBMEIsa0JBTnZCLEFBTXVCLEFBQWtCLEFBQzVDO2tEQUFjLGtCQVBYLEFBT1csQUFBa0IsQUFDaEM7dURBQW1CLGtCQVJoQixBQVFnQixBQUFrQixBQUNyQztrREFBYyxrQkFUWCxBQVNXLEFBQWtCLEFBQ2hDO2dEQUFZLGtCQVZULEFBVVMsQUFBa0IsQUFDOUI7NERBQXdCLGtCQVhyQixBQVdxQixBQUFrQixBQUMxQztzREFBa0Isa0JBWmYsQUFZZSxBQUFrQixBO0FBWmpDLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOYSxBLEFBa0o3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93aW52ZXN0bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9VbmlwaS9HcmFkdWF0ZS9JbnZlc3RtZW50cyJ9