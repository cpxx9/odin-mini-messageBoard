const { Router } = require('express');
const { messages } = require('../models/db');
const { getMessageById } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { messages });
});

indexRouter.get('/messages', getMessageById);

module.exports = indexRouter;
