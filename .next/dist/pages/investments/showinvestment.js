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
                meta: nowInvestorsAdded + '/' + numInvestors,
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
                    lineNumber: 80
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, "\u039B\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_AddOrganizationsForm2.default, { address: this.props.address, test: this.props.test, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), _react2.default.createElement("br", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), _react2.default.createElement(_AddActivityForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbnZlc3RtZW50c1xcc2hvd2ludmVzdG1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJjcmVhdG9yIiwiSW52ZXN0bWVudCIsIkNhcmQiLCJHcmlkQ29sdW1uIiwiSWNvbiIsIkdyaWQiLCJ3ZWIzIiwiQWRkT3JnYW5pemF0aW9uc0Zvcm0iLCJBZGRBY3Rpdml0eUZvcm0iLCJTaG93SW52ZXN0bWVudCIsInByb3BzIiwibWFzdGVyIiwibnVtT3JnYW5pemF0aW9ucyIsIm51bUludmVzdG9ycyIsImNvbnRyaWJ1dGlvbiIsImNvbnRyaWJ1dGlvbm9yZ2FuaXphdGlvbnBlcmNlbnRhZ2UiLCJhY3Rpdml0aWVzIiwibm93T3JnYW5pemF0aW9uc0FkZGVkIiwibm93SW52ZXN0b3JzQWRkZWQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwidGVzdCIsImludmVzdG1lbnQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRJbnZlc3RtZW50U3VtbWFyeSIsImNhbGwiLCJpbnZlc3RtZW50c3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFRLEFBQU0sQUFBWSxBQUFNOztBQUNoQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUEwQjs7OztBQUNqQyxBQUFPLEFBQXFCOzs7Ozs7Ozs7SUFHdEIsQTs7Ozs7Ozs7Ozs7c0NBa0JlO3lCQVVMLEtBVkssQUFVQTtnQkFWQSxBQUVMLGdCQUZLLEFBRUw7Z0JBRkssQUFHTCwwQkFISyxBQUdMO2dCQUhLLEFBSUwsc0JBSkssQUFJTDtnQkFK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