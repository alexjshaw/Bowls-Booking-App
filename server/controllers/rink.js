const rinkDatabase = require("../database/rink");
const mongoose = require('mongoose')

const { sendDataResponse, sendErrorResponse } = require('../utility/responses')

const createRink = async (req, res) => {
  try {
    const query = {
      number: req.body.number,
      club: new mongoose.Types.ObjectId(req.body.club)
    }
    const newRink = await rinkDatabase.createRink(query)
    return sendDataResponse(res, 201, newRink)
  } catch (error) {
    return sendErrorResponse(res, 400, error.message)
  }
}

const getRinksByClub = async (req, res) => {
  try {
    const clubId = req.params.clubId;
    const rinks = await rinkDatabase.getRinksByClub(clubId);
    res.json(rinks);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports = {
  createRink,
  getRinksByClub
}