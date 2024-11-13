const { randomUUID } = require('node:crypto');
const { messages } = require('../models/db');

const postMessage = (req, res) => {
  const newMessage = {
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
    uuid: randomUUID(),
  };

  messages.push(newMessage);
  res.redirect('/');
};

module.exports = { postMessage };
