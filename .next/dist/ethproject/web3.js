'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //code run in the browser and metamask is runninig

    if (window.ethereum) {
        window.web3 = new _web2.default(window.ethereum);
        window.ethereum.enable();
    }

    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // code run on the server OR not use metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/d5860a644ed34a38a59f4d5e58ed6a6c' // Infura API
    );
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aHByb2plY3RcXHdlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWxELEFBQTBELGFBQVksQUFBRTtBQUVwRTs7UUFBSSxPQUFKLEFBQVcsVUFBVSxBQUNqQjtlQUFBLEFBQU8sT0FBTyxBQUFJLGtCQUFLLE9BQXZCLEFBQWMsQUFBZ0IsQUFDOUI7ZUFBQSxBQUFPLFNBQVAsQUFBZ0IsQUFDbkI7QUFFRDs7V0FBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBRy9CO0FBVkQsT0FVSyxBQUFFO0FBQ0g7UUFBTSxlQUFlLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQW5CLEFBQ2YsZ0VBREYsQUFBaUIsQUFDaUQsQUFFbEU7QUFIaUI7V0FHVixBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRTovTXlGaWxlcy9QYXBlaS9JbnZlc3RtZW50cyJ9