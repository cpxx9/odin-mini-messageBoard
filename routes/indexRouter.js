const { Router } = require('express');
const { showMessages } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', showMessages);

indexRouter.get('/messages', showMessages);

module.exports = indexRouter;
