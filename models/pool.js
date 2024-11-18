require('dotenv/config');
const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: process.env.DB_URL,
});

// DEV string
// `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
