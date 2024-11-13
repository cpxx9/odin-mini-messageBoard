const { messages } = require('../models/db');

const postMessage = (req, res) => {
  const newMessage = {
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect('/');
};

module.exports = { postMessage };
