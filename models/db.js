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

module.exports = { messages };
