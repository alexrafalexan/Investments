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
                header: '7. Πληροφορίες Πληρωμών',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailspayment", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                    }
                }, 'Λεπτομέρειες')),
                description: ''
            }, {
                header: '8. Κατάσταση Έρευνας',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/statusofresearch", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                }, statusOfResearchPrev + '  -- Ενέργειες')),
                description: ''
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJTaG93SW52ZXN0bWVudCIsInByb3BzIiwibWFzdGVyIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwibnVtSW52ZXN0b3JzIiwibm93SW52ZXN0b3JzQWRkZWQiLCJjb250cmlidXRpb24iLCJhY3Rpdml0aWVzIiwiYWN0aXZpdGllc1RhYmxlX2xlbmd0aCIsInN0YXR1c09mUmVzZWFyY2giLCJzdGF0dXNPZlJlc2VhcmNoUHJldiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJpbnZlc3RtZW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUSxBQUFNLEFBQVksQUFBTSxBQUFNLEFBQVE7O0FBQzlD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QUFFSyxBQUFrQixBQUMxQjtzREFBa0Isa0JBSGYsQUFHZSxBQUFrQixBQUNwQzt5RUFBcUMsa0JBSmxDLEFBSWtDLEFBQWtCLEFBQ3ZEOzJEQUF1QixrQkFMcEIsQUFLb0IsQUFBa0IsQUFDekM7OERBQTBCLGtCQU52QixBQU11QixBQUFrQixBQUM1QztrREFBYyxrQkFQWCxBQU9XLEFBQWtCLEFBQ2hDO3VEQUFtQixrQkFSaEIsQUFRZ0IsQUFBa0IsQUFDckM7a0RBQWMsa0JBVFgsQUFTVyxBQUFrQixBQUNoQztnREFBWSxrQkFWVCxBQVVTLEFBQWtCLEFBQzlCOzREQUF3QixrQkFYckIsQUFXcUIsQUFBa0IsQUFDMUM7c0RBQWtCLGtCQVpmLEFBWWUsQUFBa0IsQTtBQVpqQyxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmEsQSxBQTRJN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd2ludmVzdG1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==