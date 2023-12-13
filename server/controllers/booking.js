const bookingDatabase = require("../database/booking");
const mongoose = require('mongoose')

const { sendDataResponse, sendErrorResponse } = require("../utility/responses");

const createBooking = async (req, res) => {
  try {
    const query = {
      user: new mongoose.Types.ObjectId(req.body.user),
      rink: new mongoose.Types.ObjectId(req.body.rink),
      date: req.body.date,
      time: req.body.time,
    };
    const newBooking = await bookingDatabase.createBooking(query);
    return sendDataResponse(res, 201, newBooking);
  } catch (error) {
    return sendErrorResponse(res, 400, error.message);
  }
};

module.exports = {
  createBooking
}