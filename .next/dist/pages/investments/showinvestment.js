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
            }

            var items = [{
                header: '1. Επόπτης Έρευνας',
                meta: master,
                description: 'Ο επόπτης της Έρευνας',
                style: { overflowWrap: 'break-word' }
            }, {
                header: '2. Οργανισμοί',
                meta: nowOrganizationsAdded + '/' + nowOrganizationsAddedDeclaireMaster + '/' + numOrganizations,
                description: 'O αρθιμός των Οργανισμών που έχουν συμμετάσχει σε σχέση με αυτούς που πρέπει να συμμετάσχουν.'
            }, {
                header: '3. Επενδυτές',
                meta: _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
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
                        lineNumber: 88
                    }
                }, _react2.default.createElement("a", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                    }
                }, activitiesTable_length + '/' + activities + ' Λεπτομέρειες Activity')),
                description: 'Ο αριθμός των Activities που θα αποτελείται η έρευνα'
            }, {
                header: '7. Κατάσταση Έρευνας',
                meta: statusOfResearchPrev,
                description: ''
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(_AddOrganizationsForm2.default, { address: this.props.address,
                nowOrganizationsAdded: this.props.nowOrganizationsAdded,
                numOrganizations: this.props.numOrganizations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }), _react2.default.createElement(_AddActivityForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }))), _react2.default.createElement(_semanticUiReact.GridRow, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement(_OrganizationsPayment2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, "\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u039F\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CE\u03BD")))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement(_routes.Link, { route: "/investments/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiU2hvd0ludmVzdG1lbnQiLCJwcm9wcyIsIm1hc3RlciIsIm51bU9yZ2FuaXphdGlvbnMiLCJub3dPcmdhbml6YXRpb25zQWRkZWREZWNsYWlyZU1hc3RlciIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZCIsImNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbiIsIm51bUludmVzdG9ycyIsIm5vd0ludmVzdG9yc0FkZGVkIiwiY29udHJpYnV0aW9uIiwiYWN0aXZpdGllcyIsImFjdGl2aXRpZXNUYWJsZV9sZW5ndGgiLCJzdGF0dXNPZlJlc2VhcmNoIiwic3RhdHVzT2ZSZXNlYXJjaFByZXYiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiYWRkcmVzcyIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiaW52ZXN0bWVudCIsInF1ZXJ5IiwibWV0aG9kcyIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiY2FsbCIsImludmVzdG1lbnRzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVEsQUFBTSxBQUFZLEFBQU0sQUFBTSxBQUFROztBQUM5QyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFB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QUE7Z0NBQUE7QUFBQTtlQTVCeEIsQUFBUSxBQUVKLEFBWUksQUFXSSxBQUNJLEFBQ0ksQUFDSSxBQVEzQjs7Ozs7aUhBbEl3QixBOzs7OztpQ0FDbkI7QSw2Q0FBYSwwQkFBVyxNQUFBLEFBQU0sTUFBakIsQSxBQUF1Qjs7dUNBQ1YsV0FBQSxBQUFXLFFBQVgsQUFBbUIsdUJBQW5CLEEsQUFBMEM7O2lDQUFwRTtBOzs2Q0FHVyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjs0Q0FBUSxrQkFGTCxBQUVLLEFBQWtCLEFBQzFCO3NEQUFrQixrQkFIZixBQUdlLEFBQWtCLEFBQ3BDO3lFQUFxQyxrQkFKbEMsQUFJa0MsQUFBa0IsQUFDdkQ7MkRBQXVCLGtCQUxwQixBQUtvQixBQUFrQixBQUN6Qzs4REFBMEIsa0JBTnZCLEFBTXVCLEFBQWtCLEFBQzVDO2tEQUFjLGtCQVBYLEFBT1csQUFBa0IsQUFDaEM7dURBQW1CLGtCQVJoQixBQVFnQixBQUFrQixBQUNyQztrREFBYyxrQkFUWCxBQVNXLEFBQWtCLEFBQ2hDO2dEQUFZLGtCQVZULEFBVVMsQUFBa0IsQUFDOUI7NERBQXdCLGtCQVhyQixBQVdxQixBQUFrQixBQUMxQztzREFBa0Isa0JBWmYsQUFZZSxBQUFrQixBO0FBWmpDLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOYSxBLEFBc0k3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93aW52ZXN0bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9NeUZpbGVzL1BhcGVpL0ludmVzdG1lbnRzIn0=