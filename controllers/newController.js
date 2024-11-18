const { insertMessage } = require('../models/queries');

const postMessage = async (req, res) => {
  const newMessage = {
    text: req.body.messageText,
    username: req.body.authorName,
  };

  await insertMessage(newMessage);

  res.redirect('/');
};

module.exports = { postMessage };
