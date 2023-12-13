const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');

/*
Create a booking
Get all bookings for a single user
Get all bookings for a specific club & date
*/

router.post('/', bookingController.createBooking)
// router.get('/', bookingController.getBookings)

module.exports = router