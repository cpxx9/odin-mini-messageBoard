const { Router } = require('express');
const { messages } = require('../models/db');

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.render('index', { messages }));

module.exports = indexRouter;
