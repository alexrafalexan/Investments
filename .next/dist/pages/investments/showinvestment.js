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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJCdXR0b24iLCJHcmlkUm93Iiwid2ViMyIsIkFkZE9yZ2FuaXphdGlvbnNGb3JtIiwiQWRkQWN0aXZpdHlGb3JtIiwiT3JnYW5pemF0aW9uc1BheW1lbnQiLCJMaW5rIiwiU2hvd0ludmVzdG1lbnQiLCJwcm9wcyIsIm1hc3RlciIsIm51bU9yZ2FuaXphdGlvbnMiLCJub3dPcmdhbml6YXRpb25zQWRkZWREZWNsYWlyZU1hc3RlciIsIm5vd09yZ2FuaXphdGlvbnNBZGRlZCIsImNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbiIsIm51bUludmVzdG9ycyIsIm5vd0ludmVzdG9yc0FkZGVkIiwiY29udHJpYnV0aW9uIiwiYWN0aXZpdGllcyIsImFjdGl2aXRpZXNUYWJsZV9sZW5ndGgiLCJzdGF0dXNPZlJlc2VhcmNoIiwic3RhdHVzT2ZSZXNlYXJjaFByZXYiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiYWRkcmVzcyIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiaW52ZXN0bWVudCIsInF1ZXJ5IiwibWV0aG9kcyIsImdldEludmVzdG1lbnRTdW1tYXJ5IiwiY2FsbCIsImludmVzdG1lbnRzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVEsQUFBTSxBQUFZLEFBQU0sQUFBTSxBQUFROztBQUM5QyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFB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LEFBQ0k7QUFESjsrQkFDSSxBQUFDLDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBNUJ4QixBQUFRLEFBRUosQUFZSSxBQVdJLEFBQ0ksQUFDSSxBQUNJLEFBUTNCOzs7OztpSEF4SXdCLEE7Ozs7O2lDQUNuQjtBLDZDQUFhLDBCQUFXLE1BQUEsQUFBTSxNQUFNLEEsQUFBdkI7O3VDQUNhLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHVCQUFuQixBLEFBQTBDOztpQ0FBcEU7QTs7NkNBR1csTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7NENBQVEsa0JBRkwsQUFFSyxBQUFrQixBQUMxQjtzREFBa0Isa0JBSGYsQUFHZSxBQUFrQixBQUNwQzt5RUFBcUMsa0JBSmxDLEFBSWtDLEFBQWtCLEFBQ3ZEOzJEQUF1QixrQkFMcEIsQUFLb0IsQUFBa0IsQUFDekM7OERBQTBCLGtCQU52QixBQU11QixBQUFrQixBQUM1QztrREFBYyxrQkFQWCxBQU9XLEFBQWtCLEFBQ2hDO3VEQUFtQixrQkFSaEIsQUFRZ0IsQUFBa0IsQUFDckM7a0RBQWMsa0JBVFgsQUFTVyxBQUFrQixBQUNoQztnREFBWSxrQkFWVCxBQVVTLEFBQWtCLEFBQzlCOzREQUF3QixrQkFYckIsQUFXcUIsQUFBa0IsQUFDMUM7c0RBQWtCLGtCLEFBWmYsQUFZZSxBQUFrQjtBQVpqQyxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmEsQSxBQTRJN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd2ludmVzdG1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==