'use strict';

var routes = require('next-routes')();

routes.add('/investments/newinvestment', '/investments/newinvestment');
routes.add('/investments/:address', '/investments/showinvestment');
routes.add('/investments/:address/requests', '/investments/requests/index');
routes.add('/investments/:address/requests/new', '/investments/requests/new');
routes.add('/investments/:address/requests/newactivity', '/investments/requests/newactivity');
routes.add('/investments/:address/requests/neworganization', '/investments/requests/neworganization');
routes.add('/investments/:address/requests/newinvenstor', '/investments/requests/newinvenstor');
routes.add('/investments/:address/details/detailsactivities', '/investments/details/detailsactivities');
routes.add('/investments/:address/details/detailsorganizations', '/investments/details/detailsorganizations');
routes.add('/investments/:address/details/detailsinvenstors', '/investments/details/detailsinvenstors');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDhCQUF5QyxBQUF6QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgseUJBQW9DLEFBQXBDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrQ0FBNkMsQUFBN0M7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLHNDQUFnRCxBQUFoRDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsOENBQXdELEFBQXhEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrREFBNEQsQUFBNUQ7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLCtDQUF5RCxBQUF6RDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsbURBQTZELEFBQTdEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxzREFBZ0UsQUFBaEU7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG1EQUE2RCxBQUE3RDs7QUFFQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkQ6L1VuaXBpL0dyYWR1YXRlL0ludmVzdG1lbnRzIn0=