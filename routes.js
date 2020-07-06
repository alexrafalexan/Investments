const routes = require('next-routes')();

routes.add('/investments/newinvestment', '/investments/newinvestment');
routes.add('/investments/:address', '/investments/showinvestment');
routes.add('/investments/:address/requests', '/investments/requests/index');
routes.add('/investments/:address/requests/new','/investments/requests/new');
routes.add('/investments/:address/:id/requests/newperscentageinactivity','/investments/requests/newperscentageinactivity');
routes.add('/investments/:address/:id/requests/newpayment','/investments/requests/newpayment');
routes.add('/investments/:address/requests/newactivity','/investments/requests/newactivity');
routes.add('/investments/:address/requests/neworganization','/investments/requests/neworganization');
routes.add('/investments/:address/requests/newinvenstor','/investments/requests/newinvenstor');
routes.add('/investments/:address/details/detailsactivities','/investments/details/detailsactivities');
routes.add('/investments/:address/details/detailsorganizations','/investments/details/detailsorganizations');
routes.add('/investments/:address/details/detailsinvenstors','/investments/details/detailsinvenstors');
routes.add('/investments/:address/details/detailspayment', '/investments/details/detailspayment');
routes.add('/investments/:address/details/statusofresearch', '/investments/details/statusofresearch');
routes.add('/investments/:address/:id/details/detailspercentageinactivity', '/investments/details/detailspercentageinactivity');
routes.add('/investments/:address/:id/requests/changeactivitystatus', '/investments/requests/changeactivitystatus');



module.exports = routes;

