const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking');

router.post('/', bookingController.createBooking)
router.get('/', bookingController.getBookings);

module.exports = router