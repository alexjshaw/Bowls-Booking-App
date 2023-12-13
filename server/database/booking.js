const BookingModel = require('../models/booking')

class Booking {
  async createBooking(query = {}) {
    try {
      const booking = new BookingModel(query)
      await booking.save()
      return booking
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = new Booking()