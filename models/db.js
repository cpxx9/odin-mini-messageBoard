const { randomUUID } = require('node:crypto');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    uuid: randomUUID(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    uuid: randomUUID(),
  },
];

function getMessageById(id) {
  return messages.find((message) => message.uuid === id);
}

module.exports = { messages, getMessageById };
