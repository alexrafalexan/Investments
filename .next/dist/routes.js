'use strict';

var routes = require('next-routes')();

routes.add('/', '/');
routes.add('/aboutdapp', '/aboutdapp');
routes.add('/investments/newinvestment', '/investments/newinvestment');
routes.add('/investments/showinvestments', '/investments/showinvestments');
routes.add('/investments/:address', '/investments/showinvestment');
routes.add('/investments/:address/requests', '/investments/requests/index');
routes.add('/investments/:address/requests/new', '/investments/requests/new');
routes.add('/investments/:address/:id/requests/newperscentageinactivity', '/investments/requests/newperscentageinactivity');
routes.add('/investments/:address/:id/requests/newpayment', '/investments/requests/newpayment');
routes.add('/investments/:address/requests/newactivity', '/investments/requests/newactivity');
routes.add('/investments/:address/requests/neworganization', '/investments/requests/neworganization');
routes.add('/investments/:address/requests/newinvenstor', '/investments/requests/newinvenstor');
routes.add('/investments/:address/details/detailsactivities', '/investments/details/detailsactivities');
routes.add('/investments/:address/details/detailsorganizations', '/investments/details/detailsorganizations');
routes.add('/investments/:address/details/detailsinvenstors', '/investments/details/detailsinvenstors');
routes.add('/investments/:address/details/detailspayment', '/investments/details/detailspayment');
routes.add('/investments/:address/details/statusofresearch', '/investments/details/statusofresearch');
routes.add('/investments/:address/:id/details/detailspercentageinactivity', '/investments/details/detailspercentageinactivity');
routes.add('/investments/:address/:id/requests/changeactivitystatus', '/investments/requests/changeactivitystatus');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLEtBQWUsQUFBZjtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsY0FBd0IsQUFBeEI7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDhCQUF5QyxBQUF6QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsZ0NBQTJDLEFBQTNDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCx5QkFBb0MsQUFBcEM7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtDQUE2QyxBQUE3QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsc0NBQWdELEFBQWhEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCwrREFBeUUsQUFBekU7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGlEQUEyRCxBQUEzRDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsOENBQXdELEFBQXhEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrREFBNEQsQUFBNUQ7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLCtDQUF5RCxBQUF6RDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsbURBQTZELEFBQTdEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxzREFBZ0UsQUFBaEU7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG1EQUE2RCxBQUE3RDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsZ0RBQTJELEFBQTNEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrREFBNkQsQUFBN0Q7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGlFQUE0RSxBQUE1RTtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsMkRBQXNFLEFBQXRFOztBQUlBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==