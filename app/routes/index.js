const routes = {};

routes.user = require('./user')
routes.category = require('./category')
routes.product=require('./product')
routes.order=require('./order_detail')

module.exports = routes;