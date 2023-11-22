const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'BowlsBooking';

let db;

async function connectToDB() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected successfully to MongoDB');
  db = client.db(dbName);
}

function getDB() {
  return db;
}

module.exports = { connectToDB, getDB };
