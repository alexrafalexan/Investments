'use strict';

var routes = require('next-routes')();

routes.add('/investments/newinvestment', '/investments/newinvestment');
routes.add('/investments/:address', '/investments/showinvestment');
routes.add('/investments/:address/requests', '/investments/requests/index');
routes.add('/investments/:address/requests/new', '/investments/requests/new');
routes.add('/investments/:address/details/detailsactivities', '/investments/details/detailsactivities');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDhCQUF5QyxBQUF6QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgseUJBQW9DLEFBQXBDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrQ0FBNkMsQUFBN0M7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLHNDQUFnRCxBQUFoRDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsbURBQTZELEFBQTdEOztBQUVBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRTovTXlGaWxlcy9QYXBlaS9JbnZlc3RtZW50cyJ9