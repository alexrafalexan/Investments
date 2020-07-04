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
                statusOfResearchPrev = 'Inactive'; //Προσθήκη Συνθηκών σε δεύτερο χρόνο
            }

            var items = [{
                header: '1. Επόπτης Έρευνας',
                meta: master,
                description: 'Ο επόπτης της Έρευνας',
                style: { overflowWrap: 'break-word' }
            }, {
                header: '2. Οργανισμοί',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/details/detailsorganizations", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations + '  -- Λεπτομέρειες')),
                description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '3. Επενδυτές',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, nowInvestorsAdded + '/' + numInvestors)),
                description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '4. Συνεισφορά ανά Επένδυτή',
                meta: _web2.default.utils.fromWei(contribution, 'ether'),
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε επενδυτής'
            }, {
                header: '5. Συνεισφορά ανά Οργανισμών',
                meta: _web2.default.utils.fromWei(contributionorganization, 'ether'),
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε Οργανισμός σαν εγγύηση'
            }, {
                header: '6. Αριθμός Activities',
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
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_AddOrganizationsForm2.default, { address: this.props.address,
                nowOrganizationsAdded: this.props.nowOrganizationsAdded,
                numOrganizations: this.props.numOrganizations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }), _react2.default.createElement(_AddActivityForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }))), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement(_OrganizationsPayment2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, "\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CE\u03BD")))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, "\u039B\u03B5\u03C0\u03C1\u03BF\u03BC\u03AD\u03C1\u03B9\u03B5\u03C2 Activity")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiRGV0YWlsc09yZ2FuaXphdGlvbnMiLCJTaG93SW52ZXN0bWVudCIsInByb3BzIiwibWFzdGVyIiwibnVtT3JnYW5pemF0aW9ucyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZERlY2xhaXJlTWFzdGVyIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwiY29udHJpYnV0aW9ub3JnYW5pemF0aW9uIiwibnVtSW52ZXN0b3JzIiwibm93SW52ZXN0b3JzQWRkZWQiLCJjb250cmlidXRpb24iLCJhY3Rpdml0aWVzIiwiYWN0aXZpdGllc1RhYmxlX2xlbmd0aCIsInN0YXR1c09mUmVzZWFyY2giLCJzdGF0dXNPZlJlc2VhcmNoUHJldiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJhZGRyZXNzIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJpbnZlc3RtZW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0SW52ZXN0bWVudFN1bW1hcnkiLCJjYWxsIiwiaW52ZXN0bWVudHN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUSxBQUFNLEFBQVksQUFBTSxBQUFNLEFBQVE7O0FBQzlD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Y0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsOEJBQUsseUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUF4Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUE1QnhCLEFBQVEsQUFFSixBQVlJLEFBV0ksQUFDSSxBQUNJLEFBQ0ksQUFRM0I7Ozs7O2lILEFBdkl3Qjs7Ozs7aUNBQ25CO0EsNkNBQWEsMEJBQVcsTUFBQSxBQUFNLE1BQWpCLEFBQXVCLEE7O3VDQUNWLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHVCQUFuQixBLEFBQTBDOztpQ0FBcEU7QTs7NkNBR1csTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7NENBQVEsa0JBRkwsQUFFSyxBQUFrQixBQUMxQjtzREFBa0Isa0JBSGYsQUFHZSxBQUFrQixBQUNwQzt5RUFBcUMsa0JBSmxDLEFBSWtDLEFBQWtCLEFBQ3ZEOzJEQUF1QixrQkFMcEIsQUFLb0IsQUFBa0IsQUFDekM7OERBQTBCLGtCQU52QixBQU11QixBQUFrQixBQUM1QztrREFBYyxrQkFQWCxBQU9XLEFBQWtCLEFBQ2hDO3VEQUFtQixrQkFSaEIsQUFRZ0IsQUFBa0IsQUFDckM7a0RBQWMsa0JBVFgsQUFTVyxBQUFrQixBQUNoQztnREFBWSxrQkFWVCxBQVVTLEFBQWtCLEFBQzlCOzREQUF3QixrQkFYckIsQUFXcUIsQUFBa0IsQUFDMUM7c0RBQWtCLGtCQVpmLEFBWWUsQUFBa0IsQTtBQVpqQyxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmEsQSxBQTJJN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd2ludmVzdG1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==