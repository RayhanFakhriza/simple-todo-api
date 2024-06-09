const route = require('express').Router();
const controller = require('../controllers/todo');
const checkAuth = require('../middlewares/checkAuth');

route.get('/health-check', controller.healthCheck);
route.get('/', controller.index);
route.get('/:id', controller.detail);
route.patch('/:id', controller.edit);
route.post('/add', controller.add);
route.delete('/:id', controller.delete);

module.exports = route;