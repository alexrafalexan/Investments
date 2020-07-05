'use strict';

var routes = require('next-routes')();

routes.add('/investments/newinvestment', '/investments/newinvestment');
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
routes.add('/investments/:address/:id/details/detailspercentageinactivity', '/investments/details/detailspercentageinactivity');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDhCQUF5QyxBQUF6QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgseUJBQW9DLEFBQXBDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrQ0FBNkMsQUFBN0M7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLHNDQUFnRCxBQUFoRDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsK0RBQXlFLEFBQXpFO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxpREFBMkQsQUFBM0Q7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLDhDQUF3RCxBQUF4RDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsa0RBQTRELEFBQTVEO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCwrQ0FBeUQsQUFBekQ7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG1EQUE2RCxBQUE3RDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsc0RBQWdFLEFBQWhFO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxtREFBNkQsQUFBN0Q7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGdEQUEyRCxBQUEzRDtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsaUVBQTRFLEFBQTVFOztBQUdBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRDovVW5pcGkvR3JhZHVhdGUvSW52ZXN0bWVudHMifQ==