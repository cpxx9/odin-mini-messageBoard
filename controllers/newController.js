const { body, validationResult } = require('express-validator');
const { insertMessage } = require('../models/queries');

const alphaNumErr = 'must only contain letters and numbers';
const usernameLengthErr = 'must be between 1 and 20 characters';
const lengthErr = 'must be no more than 250 characters';

const validateMessage = [
  body('authorName')
    .trim()
    .isAlphanumeric()
    .withMessage(`Username: ${alphaNumErr}`)
    .isLength({ min: 1, max: 20 })
    .withMessage(`Username: ${usernameLengthErr}`),
  body('messageText')
    .trim()
    .isLength({ max: 250 })
    .withMessage(`Message: ${lengthErr}`),
];

const postMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('form', {
        title: 'New message',
        errors: errors.array(),
      });
    }
    const newMessage = {
      text: req.body.messageText,
      username: req.body.authorName,
    };

    await insertMessage(newMessage);

    res.redirect('/');
  },
];

module.exports = { postMessage };
