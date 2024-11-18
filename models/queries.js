const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY id DESC');
  return rows;
}

async function insertMessage(message) {
  await pool.query(
    'INSERT INTO messages (username, text, added) VALUES ($1, $2, current_timestamp)',
    [message.username, message.text]
  );
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
  insertMessage,
};
