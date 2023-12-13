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

const getBookings = async (req, res) => {
  try {
    const query = {};
    if (req.query.rink) {
      query.rink = Array.isArray(req.query.rink) ? req.query.rink : [req.query.rink];
    }
    if (req.query.user) query.user = req.query.user;

    const bookings = await bookingDatabase.getBookings(query);
    res.json(bookings);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports = {
  createBooking,
  getBookings
}