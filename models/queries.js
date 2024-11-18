const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getSingleMessage(mid) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    mid,
  ]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  getSingleMessage,
};