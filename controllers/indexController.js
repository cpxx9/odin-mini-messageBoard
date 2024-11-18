// const db = require('../models/db');
const { getAllMessages, getSingleMessage } = require('../models/queries');

// const getMessageById = (req, res) => {
//   const { mid } = req.query;
//   const message = db.getMessageById(mid);

//   res.render('message', { message });
// };

const showMessages = async (req, res) => {
  const { mid } = req.query;

  if (!mid) {
    const messages = await getAllMessages();
    res.render('index', { title: 'All messages', messages });
  } else {
    const message = await getSingleMessage(mid);
    res.render('message', { message });
  }
};

module.exports = { showMessages };
