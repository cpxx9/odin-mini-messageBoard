const { Router } = require('express');
const { postMessage } = require('../controllers/newController');

const newRouter = Router();

newRouter
  .route('/')
  .get((req, res) => res.render('form', {}))
  .post(postMessage);

module.exports = { newRouter };
