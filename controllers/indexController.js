const db = require('../models/db');

const getMessageById = (req, res) => {
  const { messageId } = req.params;
  const message = db.getMessageById(messageId);

  res.render('message', { message });
};

module.exports = { getMessageById };
