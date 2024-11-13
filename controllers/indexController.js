const db = require('../models/db');

const getMessageById = (req, res) => {
  const { mid } = req.query;
  const message = db.getMessageById(mid);

  res.render('message', { message });
};

module.exports = { getMessageById };
