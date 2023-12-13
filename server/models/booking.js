const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  rink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rink",
    required: true
  },
  date: { type: Date, required: true },
  time: {
    type: String,
    required: true,
    enum: ['8-10am', '10-12pm', '12-2pm', '2-4pm', '4-6pm', '6-8pm']
  }
}, { timestamps: true })

bookingSchema.index({ rink: 1, date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model('Booking', bookingSchema)