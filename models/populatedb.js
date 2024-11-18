#! /usr/bin/env node
require('dotenv/config');
const { Client } = require('pg');
const { argv } = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Owner', 'The first message!', current_timestamp);
`;

const connectionString =
  argv[2] ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

async function main() {
  console.log(argv[2]);
  console.log('seeding...');
  const client = new Client({
    connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
