const express = require('express');
const { getDB } = require('../../db/connect');

const router = express.Router();

router.get('/rinks', async (req, res) => {
  const db = getDB();
  const collection = db.collection('Rinks');
  const rinks = await collection.find({}).toArray();
  console.log(rinks);
  res.json(rinks);
});

module.exports = router;
