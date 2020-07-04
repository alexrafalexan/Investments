const routes = require('next-routes')();

routes.add('/investments/newinvestment', '/investments/newinvestment');
routes.add('/investments/:address', '/investments/showinvestment');
routes.add('/investments/:address/requests', '/investments/requests/index');
routes.add('/investments/:address/requests/new','/investments/requests/new');
routes.add('/investments/:address/details/detailsactivities','/investments/details/detailsactivities');
routes.add('/investments/:address/details/detailsorganizations','investments/details/detailsorganizations');

module.exports = routes;

