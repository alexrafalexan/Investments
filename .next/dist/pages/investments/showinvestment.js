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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\MyFiles\\Papei\\Investments\\pages\\investments\\showinvestment.js?entry";


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
                numInvestors = _props.numInvestors,
                contribution = _props.contribution,
                contributionorganizationpercentage = _props.contributionorganizationpercentage,
                activities = _props.activities,
                nowOrganizationsAdded = _props.nowOrganizationsAdded,
                nowInvestorsAdded = _props.nowInvestorsAdded;

            var items = [{
                header: '1. Επόπτης Έρευνας',
                meta: master,
                description: 'Ο επόπτης της Έρευνας',
                style: { overflowWrap: 'break-word' }
            }, {
                header: '2. Οργανισμοί',
                meta: nowOrganizationsAdded + '/' + numOrganizations,
                description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '3. Επενδυτές',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, nowInvestorsAdded + '/' + numInvestors)),
                description: 'O αρθιμός των Επενδυτών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '4. Συνεισφορά ανά Επένδυτή',
                meta: _web2.default.utils.fromWei(contribution, 'ether'),
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε επενδυτής'
            }, {
                header: '5. Συνεισφορά ανά Οργανισμών',
                meta: _web2.default.utils.fromWei(contributionorganizationpercentage, 'ether'),
                description: 'Το ποσό σε ether που πρέπει να καταθέσει ο κάθε Οργανισμός σαν εγγύηση'
            }, {
                header: '6. Αριθμός Activities',
                meta: activities,
                description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
            }, {
                header: '7. Συνολικό Ποσό Contract',
                meta: activities,
                description: ''
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_AddOrganizationsForm2.default, { address: this.props.address,
                nowOrganizationsAdded: this.props.nowOrganizationsAdded,
                numOrganizations: this.props.numOrganizations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement(_AddActivityForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }))), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement(_OrganizationsPayment2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, "\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CE\u03BD")))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
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
                                    numInvestors: investmentsummary[2],
                                    contribution: investmentsummary[3],
                                    contributionorganizationpercentage: investmentsummary[4],
                                    activities: investmentsummary[5],
                                    nowOrganizationsAdded: investmentsummary[6],
                                    nowInvestorsAdded: investmentsummary[7]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiU2hvd0ludmVzdG1lbnQiLCJwcm9wcyIsIm1hc3RlciIsIm51bU9yZ2FuaXphdGlvbnMiLCJudW1JbnZlc3RvcnMiLCJjb250cmlidXRpb24iLCJjb250cmlidXRpb25vcmdhbml6YXRpb25wZXJjZW50YWdlIiwiYWN0aXZpdGllcyIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZCIsIm5vd0ludmVzdG9yc0FkZGVkIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImFkZHJlc3MiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImludmVzdG1lbnQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRJbnZlc3RtZW50U3VtbWFyeSIsImNhbGwiLCJpbnZlc3RtZW50c3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFRLEFBQU0sQUFBWSxBQUFNLEFBQU0sQUFBUTs7QUFDOUMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBMEI7Ozs7QUFDakMsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQTBCOzs7O0FBQ2pDLEFBQVEsQUFBVzs7Ozs7OztJLEFBR2I7Ozs7Ozs7Ozs7O3NDQWtC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Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtBQUFBLGlDQUVILGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBUGhCLEFBSUksQUFDSSxBQUNJLEFBQ0ksQUFJWiwrSEFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyx5QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQTVCeEIsQUFBUSxBQUVKLEFBWUksQUFXSSxBQUNJLEFBQ0ksQUFDSSxBQVEzQjs7Ozs7aUhBbEh3QixBOzs7OztpQ0FDbkI7QSw2Q0FBYSwwQkFBVyxNQUFBLEFBQU0sTUFBakIsQUFBdUIsQTs7dUNBQ1YsV0FBQSxBQUFXLFFBQVgsQUFBbUIsdUJBQW5CLEFBQTBDLEE7O2lDQUFwRTtBOzs2Q0FHVyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjs0Q0FBUSxrQkFGTCxBQUVLLEFBQWtCLEFBQzFCO3NEQUFrQixrQkFIZixBQUdlLEFBQWtCLEFBQ3BDO2tEQUFjLGtCQUpYLEFBSVcsQUFBa0IsQUFDaEM7a0RBQWMsa0JBTFgsQUFLVyxBQUFrQixBQUNoQzt3RUFBb0Msa0JBTmpDLEFBTWlDLEFBQWtCLEFBQ3REO2dEQUFZLGtCQVBULEFBT1MsQUFBa0IsQUFDOUI7MkRBQXVCLGtCQVJwQixBQVFvQixBQUFrQixBQUN6Qzt1REFBbUIsa0JBVGhCLEFBU2dCLEFBQWtCLEE7QUFUbEMsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5hLEEsQUFzSDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dpbnZlc3RtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L015RmlsZXMvUGFwZWkvSW52ZXN0bWVudHMifQ==